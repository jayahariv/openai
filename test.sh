#!/bin/bash

# Usage: ./openai_request.sh "<prompt>" <max_tokens> <temperature>
# Example: ./openai_request.sh "Write a Python function to calculate Fibonacci sequence." 150 0.7

# Validate input arguments
if [ "$#" -ne 1 ]; then
    echo "Usage: $0 \"<prompt>\""
    exit 1
fi

# Assign input arguments to variables
PROMPT=$1
MAX_TOKENS=100
TEMPERATURE=0.5

PROMPT=$(echo "$PROMPT" | xargs)

# Your OpenAI API Key
OPENAI_API_KEY=""


# Make the API call
RESPONSE=$(curl -s -X POST https://api.openai.com/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -d "{
        \"model\": \"gpt-4\",
        \"messages\": [
            {\"role\": \"user\", \"content\": \"$PROMPT\"}
        ]
    }")

# Output the response
echo "Response:"
echo "$RESPONSE"
