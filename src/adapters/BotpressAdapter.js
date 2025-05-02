/**
 * Adaptador para conectar o Botpress ao Bot Framework Web Chat
 * Este adaptador simula a Direct Line API para que o Web Chat possa se conectar ao Botpress
 */

// Função para criar um adapter DirectLine que se comunica com o Botpress
export function createBotpressDirectLine(botpressUrl, botId) {
  let observers = [];
  let connectionStatus = 'uninitialized'; // 'uninitialized', 'connecting', 'connected', 'closed'
  
  // Histórico de atividades
  let activityHistory = [];
  // ID de conversação único para esta sessão
  const conversationId = generateRandomId();
  
  // Conectar ao serviço Botpress
  const connect = async () => {
    try {
      connectionStatus = 'connecting';
      notifyConnectionStatusChanged();
      
      // Simular uma conexão bem-sucedida após um pequeno atraso
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      connectionStatus = 'connected';
      notifyConnectionStatusChanged();
      
      // Enviar uma atividade de boas-vindas inicial
      const welcomeActivity = createMessageActivity('Olá! Sou o Kowalski IA, assistente da ASCII Empresa Junior. Como posso ajudar?', 'bot');
      notifySubscribers(welcomeActivity);
      
      return true;
    } catch (error) {
      console.error('Erro ao conectar ao Botpress:', error);
      connectionStatus = 'error';
      notifyConnectionStatusChanged();
      return false;
    }
  };
  
  // Notificar os inscritos sobre mudanças no status da conexão
  const notifyConnectionStatusChanged = () => {
    for (const observer of observers) {
      if (observer.next) {
        observer.next(connectionStatus);
      }
    }
  };
  
  // Notificar os inscritos sobre novas atividades
  const notifySubscribers = (activity) => {
    activityHistory.push(activity);
    
    for (const observer of observers) {
      if (observer.next) {
        observer.next([activity]);
      }
    }
  };
  
  // Criar uma atividade de mensagem formatada
  const createMessageActivity = (text, role, id = generateRandomId()) => {
    const now = new Date();
    
    return {
      id,
      timestamp: now.toISOString(),
      channelId: 'webchat',
      conversation: { id: conversationId },
      from: {
        id: role === 'bot' ? 'bot' : 'user',
        name: role === 'bot' ? 'Kowalski IA' : 'Usuário',
        role
      },
      type: 'message',
      text,
      textFormat: 'plain',
      locale: 'pt-BR'
    };
  };
  
  // Enviar uma mensagem para o Botpress
  const postActivity = async (activity) => {
    try {
      // Criar uma cópia da atividade com um novo ID
      const clientActivityId = activity.id || generateRandomId();
      const postActivity = {
        ...activity,
        id: clientActivityId,
        timestamp: new Date().toISOString()
      };
      
      // Adicionar a atividade do usuário ao histórico
      notifySubscribers(postActivity);
      
      // Simular o envio para o Botpress e recuperação da resposta
      // Em um cenário real, você enviaria uma solicitação HTTP para o Botpress aqui
      setTimeout(() => {
        // Simular uma resposta do bot
        const botResponse = createMessageActivity(
          `Isso é uma resposta simulada ao seu texto: "${activity.text}"`, 
          'bot'
        );
        
        notifySubscribers(botResponse);
      }, 1000);
      
      return clientActivityId;
    } catch (error) {
      console.error('Erro ao enviar mensagem para o Botpress:', error);
      return null;
    }
  };
  
  // Gerar um ID aleatório para atividades e conversas
  const generateRandomId = () => {
    return `id-${Math.random().toString(36).substr(2, 9)}`;
  };
  
  // Iniciar a conexão
  connect();
  
  // Implementar a interface DirectLine
  return {
    activity$: {
      subscribe: (observer) => {
        observers.push(observer);
        
        // Enviar histórico de atividades para o novo inscrito
        if (activityHistory.length > 0 && observer.next) {
          observer.next(activityHistory);
        }
        
        return {
          unsubscribe: () => {
            observers = observers.filter(o => o !== observer);
          }
        };
      }
    },
    connectionStatus$: {
      subscribe: (observer) => {
        observers.push(observer);
        
        // Notificar o estado atual de conexão
        if (observer.next) {
          observer.next(connectionStatus);
        }
        
        return {
          unsubscribe: () => {
            observers = observers.filter(o => o !== observer);
          }
        };
      }
    },
    postActivity: (activity) => {
      return {
        subscribe: (observer) => {
          const id = postActivity(activity);
          
          if (observer.next) {
            observer.next(id);
          }
          
          if (observer.complete) {
            observer.complete();
          }
          
          return {
            unsubscribe: () => {}
          };
        }
      };
    },
    end: () => {
      connectionStatus = 'ended';
      notifyConnectionStatusChanged();
      observers = [];
    }
  };
}

// Exportar o adaptador como padrão
export default createBotpressDirectLine; 