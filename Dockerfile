FROM node:14-alpine AS frontend
COPY ui ui
RUN cd ui && \
    npm install --legacy-peer-deps && \
    npm run build

FROM go

FROM alpine
LABEL org.opencontainers.image.title="parseable" \
    org.opencontainers.image.description="Docker Extension for Parseable" \
    org.opencontainers.image.vendor="Cloudnatively Services" \
    com.docker.desktop.extension.api.version=">= 0.2.3" \
    com.docker.extension.screenshots="" \
    com.docker.extension.detailed-description="" \
    com.docker.extension.publisher-url="" \
    com.docker.extension.additional-urls="" \
    com.docker.extension.changelog=""

COPY metadata.json .
COPY --from=frontend ui/build ui
COPY images/ .