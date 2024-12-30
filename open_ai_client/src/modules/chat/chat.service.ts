import axios from 'axios';
import {} from '../../service/apiClient';
import {} from '../../service/serviceEndPoints';

const API_KEY = import.meta.env.VITE_OPENAI_KEY;

export async function AskGpt3(question: any) {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4',
        messages: [
            {
                role: 'user',
                content: `${question}`,
            }
        ],
        max_tokens: 1000
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`,
        }
      }
    );
    var res = response.data && 
                response.data.choices && 
                response.data.choices[0] && 
                response.data.choices[0].message && 
                response.data.choices[0].message.content;
    return res;
  }