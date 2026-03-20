# ---------- Stage 1: Build ----------
FROM node:20-alpine AS builder

WORKDIR /nguyen_roline_ui_garden_build_checks

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build


# ---------- Stage 2: Serve ----------
FROM nginx:alpine

# Remove default content
RUN rm -rf /usr/share/nginx/html/*

# Copy built app
COPY --from=builder /nguyen_roline_ui_garden_build_checks/dist /usr/share/nginx/html

# Use default nginx port (80)
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]