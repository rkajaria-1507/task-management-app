FROM node:18
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 3000
# Set environment for better WebSocket connection
ENV HOST=0.0.0.0
ENV CHOKIDAR_USEPOLLING=true
ENV WATCHPACK_POLLING=true
# Use a specific startup command with HMR options
CMD ["npm", "run", "dev"]
