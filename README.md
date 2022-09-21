# Parseable Docker Extension for Docker Desktop

Parseable is an efficient and scalable log storage and management platform. Cloud native by design, Parseable ensures ease of deployment and use. It is compatible with standard logging agents like FluentBit, LogStash etc. With object storage as primary storage for Parseable, you get seamless scale and flexibility for ever growing log data. Parseable also offers a builtin, intuitive GUI for log query and analysis.

With this Docker Extension, now you can query and analyze any Parseable server on Docker Desktop with a single-click.

# Getting Started

- Docker Desktop 4.8+
- Enable Docker Extension under Dashboard UI

<img width="1349" alt="image" src="./images/preferences.png">

## Clone the repository

```
git clone https://github.com/parseablehq/parseable-docker-extension
```

## Build the Extension

```
make build-extension
```

## Install the Docker Extension

```
docker extension install parseable/parseable-docker-extension:v0.0.1
```

<img width="1348" alt="image" src="./images/parseable.png">
