# Stage 1: Build Storybook
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build-storybook

# Stage 2: Serve with nginx on port 8083
FROM nginx:stable-alpine
COPY --from=builder /app/storybook-static /nguyen_roline_ui_garden
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]