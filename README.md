## @nestjs/confluence

### Info

이 프로젝트는 https://developer.atlassian.com/cloud/confluence/rest/v2/intro/#about 의 openapi 파일로 생성되었습니다.

### Building

To install the required dependencies and to build the typescript sources run:

```
npm install
npm run build
```

#### General usage

In your Nestjs project:

```typescript
// without configuring providers
import { ConfluenceApiModule } from "@nestjs/confluence";
import { HttpModule } from "@nestjs/axios";

@Module({
  imports: [ConfluenceApiModule, HttpModule],
  providers: [],
})
export class AppModule {}
```

```typescript
// configuring providers
import { ConfluenceApiModule, Configuration, ConfigurationParameters } from '';

export function apiConfigFactory (): Configuration => {
  const params: ConfigurationParameters = {
    // set configuration parameters here.
  }
  return new Configuration(params);
}

@Module({
    imports: [ ConfluenceApiModule.forRoot(apiConfigFactory) ],
    declarations: [ AppComponent ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
```

```typescript
import { DefaultApi } from "";

export class AppComponent {
  constructor(private apiGateway: DefaultApi) {}
}
```

Note: The ConfluenceApiModule a dynamic module and instantiated once app wide.
This is to ensure that all services are treated as singletons.

#### Using multiple swagger files / APIs / ConfluenceApiModules

In order to use multiple `ConfluenceApiModules` generated from different swagger files,
you can create an alias name when importing the modules
in order to avoid naming conflicts:

```typescript
import { ConfluenceApiModule } from "@nestjs/confluence";
import { ConfluenceApiModule as OtherConfluenceApiModule } from "@nestjs/confluence";
import { HttpModule } from "@nestjs/axios";

@Module({
  imports: [ConfluenceApiModule, OtherConfluenceApiModule, HttpModule],
})
export class AppModule {}
```

### Set service base path

If different than the generated base path, during app bootstrap, you can provide the base path to your service.

```typescript
import { BASE_PATH } from "";

bootstrap(AppComponent, [
  { provide: BASE_PATH, useValue: "https://your-web-service.com" },
]);
```

or

```typescript
import { BASE_PATH } from '';

@Module({
    imports: [],
    declarations: [ AppComponent ],
    providers: [ provide: BASE_PATH, useValue: 'https://your-web-service.com' ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
```

### Configuring the module with `forRootAsync`

You can also use the Nestjs Config Module/Service to configure your app with `forRootAsync`.

```typescript
@Module({
  imports: [
    ConfluenceApiModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService): Configuration => {
        const params: ConfigurationParameters = {
          // set configuration parameters here.
          basePath: config.get("API_URL"),
        };
        return new Configuration(params);
      },
    }),
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

#### Using @nestjs/cli

First extend your `src/environments/*.ts` files by adding the corresponding base path:

```typescript
export const environment = {
  production: false,
  API_BASE_PATH: "http://127.0.0.1:8080",
};
```

In the src/app/app.module.ts:

```typescript
import { BASE_PATH } from "";
import { environment } from "../environments/environment";

@Module({
  declarations: [AppComponent],
  imports: [],
  providers: [
    {
      provide: "BASE_PATH",
      useValue: environment.API_BASE_PATH,
    },
  ],
})
export class AppModule {}
```

