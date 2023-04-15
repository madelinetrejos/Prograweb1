# React Frontend para API JWT Auth

Este proyecto es el frontend en React para la API de autenticación basada en JWT. Permite registro, login y acceso a recursos protegidos según roles (admin, moderador).


## Gestión del Estado

La gestión del estado se maneja mediante Context API. El contexto `AuthContext` provee los métodos para login, registro y logout, así como el estado del usuario autenticado. Los componentes consumen este contexto para determinar si el usuario está autenticado y qué roles posee.

## Gestión de Rutas

React Router se usa para la navegación entre componentes. Las rutas `/admin` y `/moderator` son protegidas y verifican los roles del usuario antes de permitir el acceso. La ruta principal `/` es de acceso público.
