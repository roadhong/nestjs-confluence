## nestjs-confluence

### Info

This project was generated from the OpenAPI file at https://developer.atlassian.com/cloud/confluence/rest/v2/intro/#about

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
import { ConfluenceApiModule } from "nestjs-confluence";
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
import { ConfluenceApiModule } from "nestjs-confluence";
import { ConfluenceApiModule as OtherConfluenceApiModule } from "nestjs-confluence";
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



# Service

| Service Name                | Description (API Reference)                                                                 |
|-----------------------------|--------------------------------------------------------------------------------------------|
| **AdminKeyService**         | [Admin Key API](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-admin-key/) |
| **AncestorsService**        | [Ancestors API](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-ancestors/) |
| **AttachmentService**       | [Attachment API](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-attachment/) |
| **BlogPostService**         | [Blog Post API](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-blog-post/) |
| **ChildrenService**         | [Children API](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-children/) |
| **ClassificationLevelService** | [Classification Level API](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-classification-level/) |
| **CommentService**          | [Comment API](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-comment/) |
| **ContentService**          | [Content API](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-content/) |
| **ContentPropertiesService**| [Content Properties API](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-content-properties/) |
| **CustomContentService**    | [Custom Content API](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-custom-content/) |
| **DataPoliciesService**     | [Data Policies API](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-data-policies/) |
| **DatabaseService**         | [Database API](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-database/) |
| **DescendantsService**      | [Descendants API](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-descendants/) |
| **EAPService**              | [EAP API](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-eap/) |
| **FolderService**           | [Folder API](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-folder/) |
| **LabelService**            | [Label API](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-label/) |
| **LikeService**             | [Like API](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-like/) |
| **OperationService**        | [Operation API](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-operation/) |
| **PageService**             | [Page API](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-page/) |
| **RedactionsService**       | [Redactions API](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-redactions/) |
| **SmartLinkService**        | [Smart Link API](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-smart-link/) |
| **SpaceService**            | [Space API](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-space/) |
| **SpacePermissionsService** | [Space Permissions API](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-space-permissions/) |
| **SpacePropertiesService**  | [Space Properties API](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-space-properties/) |
| **SpaceRolesService**       | [Space Roles API](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-space-roles/) |
| **TaskService**             | [Task API](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-task/) |
| **UserService**             | [User API](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-user/) |
| **VersionService**          | [Version API](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-version/) |
| **WhiteboardService**       | [Whiteboard API](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-whiteboard/) |