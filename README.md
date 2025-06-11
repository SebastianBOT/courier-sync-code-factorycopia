# CourierSync - Sistema Web para Optimización de Procesos Logísticos

## Objetivo General 🚀

Desarrollar un sistema web que optimice los procesos de transporte y distribución de la empresa, incrementando la eficiencia operativa, reduciendo tiempos de gestión y mejorando la experiencia del cliente mediante la automatización, trazabilidad y análisis de datos en tiempo real.

---

## Funcionalidades Principales 📋

* **Feature 4. Control de Inventario en Tránsito**
    * Monitorea los paquetes en todas las etapas del transporte, minimizando pérdidas y errores.
        * **Autenticación y Autorización:** Acceso exclusivo para personal de almacén y logística al inventario en movimiento.
        * **Registro de Paquetes (CRUD):** Ingreso y modificación de datos de paquetes en tránsito (código, estado, ubicación).
        * **Actualización de Ubicación (CRUD):** Registro de la ubicación actual del paquete mediante escaneo o GPS, mejorando la trazabilidad.
        * **Alerta de Incidencias:** Notificación inmediata ante extravíos, daños o retrasos detectados en el inventario.
        * **Reporte de Inventario:** Resumen del estado actual del inventario en tránsito.

## Tecnologías Utilizadas

* **Frontend:**
    * Next.js
    * Tailwind CSS
    * TypeScript
    * Iconos (especificar la librería de iconos usada, por ejemplo, Lucide React, Font Awesome, etc.)

## Estructura del Proyecto


```bash
App/
│
├───components/          # Componentes de la interfaz de usuario
│   │
│   ├───Login.tsx        # Componente para la vista de inicio de sesión
│   │
│   ├───Menu.tsx         # Componente para el menú de navegación
│   │
│   ├───Registro.tsx      # Componente para la vista de registro de usuarios
│   │
│   └───Inventario.tsx    # Componente para la vista de gestión de inventario
```


---

## Despliegue

* **Integración Continua/Entrega Continua (CI/CD):** GitHub Actions
* **Plataforma de Despliegue:** Vercel

## Ejecución 🔧

### Requisitos Previos

* Node.js instalado en tu sistema.
* npm o yarn instalado.
* Acceso a un repositorio de GitHub (para clonar el proyecto).
* Vercel CLI (opcional, para despliegue local y pruebas).

### Pasos para la Ejecución

1.  **Clonar el Repositorio:**

    Abre tu terminal y ejecuta el siguiente comando, reemplazando `<TU_REPOSITORIO>` con la URL de tu repositorio:

    ```bash
    git clone [<TU_REPOSITORIO>](https://github.com/Jonathand77/courier-sync-code-factory)
    cd courier-sync-code-factory
    ```

2.  **Instalar Dependencias:**

    Ejecuta el siguiente comando para instalar las dependencias del proyecto:

    ```bash
    npm install
    # o
    yarn install
    ```

3.  **Configurar Variables de Entorno (si es necesario):**

    Si tu proyecto requiere variables de entorno (como claves de API, URLs de bases de datos, etc.), crea un archivo `.env.local` en la raíz del proyecto y define las variables necesarias.  Por ejemplo:

    ```
    NEXT_PUBLIC_API_URL=http://localhost:3000/api
    ```
    Asegúrate de consultar la documentación del proyecto o los archivos de configuración para conocer las variables de entorno específicas que se requieren.


---


4.  **Ejecutar la Aplicación en Desarrollo:**

    Ejecuta el siguiente comando para iniciar el servidor de desarrollo de Next.js:

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

---

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


    La aplicación estará disponible en `http://localhost:3000`.

5.  **Despliegue en Vercel (Opcional):**

    Si deseas desplegar la aplicación en Vercel, sigue estos pasos:

    * **Instalar Vercel CLI (si no lo has hecho):**

        ```bash
        npm install -g vercel
        # o
        yarn global add vercel
        ```

    * **Iniciar sesión en Vercel:**

        ```bash
        vercel login
        ```

    * **Desplegar el proyecto:**

        ```bash
        vercel
        ```

        Vercel te guiará a través del proceso de configuración y despliegue.  Asegúrate de que el archivo `vercel.json` esté configurado correctamente en tu proyecto.
    * **Previsualizar el proyecto (localmente):**
       Si quieres previsualizar el proyecto antes de hacer deploy, puedes correr el siguiente comando:
       ```bash
       vercel dev
       ```

---

## GitHub Actions

El proyecto está configurado con GitHub Actions para la integración continua y la entrega continua (CI/CD).  Esto significa que cada vez que se realizan cambios en el repositorio, se ejecutan automáticamente pruebas y se puede desplegar la aplicación en Vercel.

* **Workflow:** El workflow de GitHub Actions se define en el archivo `.github/workflows/main.yml` (o similar).
* **Acciones:** El workflow puede incluir acciones como:
    * `npm install` (o `yarn install`): Instala las dependencias del proyecto.
    * `npm run build` (o `yarn build`): Construye la aplicación Next.js para producción.
    * `vercel deploy --prebuilt`: Despliega la aplicación en Vercel.
* **Despliegue Automático:** Configurado para desplegarse automáticamente en Vercel en cada push a la rama principal (o la rama que hayas configurado).
* **Estado del Workflow:** El estado de los workflows se puede ver en la pestaña "Actions" del repositorio en GitHub.


---


## Contribución

¡Si eres parte de Fabrica escuela las contribuciones son bienvenidas! Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1.  Haz un fork del repositorio.
2.  Crea una rama para tu funcionalidad (`git checkout -b mi-funcionalidad`).
3.  Haz commit de tus cambios (`git commit -am 'Agrega nueva funcionalidad'`).
4.  Sube los cambios a la rama (`git push origin mi-funcionalidad`).
5.  Crea un nuevo Pull Request.

## Licencia 📄

This project is licensed under the (MIT LICENSE) License - see the [LICENSE](LICENSE) file for details

--- 

## Expressions of Gratitude 🎁

* Tell others about this project 📢
* Say thank you publicly 🤓.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
