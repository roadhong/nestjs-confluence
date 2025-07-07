import { HttpModule, HttpService } from "@nestjs/axios";
import { DynamicModule, Global, Module, Provider } from "@nestjs/common";
import {
  AsyncConfiguration,
  Configuration,
  ConfigurationFactory,
} from "./configuration";

import { AdminKeyService } from "./api/adminKey.service";
import { AncestorsService } from "./api/ancestors.service";
import { AttachmentService } from "./api/attachment.service";
import { BlogPostService } from "./api/blogPost.service";
import { ChildrenService } from "./api/children.service";
import { ClassificationLevelService } from "./api/classificationLevel.service";
import { CommentService } from "./api/comment.service";
import { ContentService } from "./api/content.service";
import { ContentPropertiesService } from "./api/contentProperties.service";
import { CustomContentService } from "./api/customContent.service";
import { DataPoliciesService } from "./api/dataPolicies.service";
import { DatabaseService } from "./api/database.service";
import { DescendantsService } from "./api/descendants.service";
import { EAPService } from "./api/eAP.service";
import { FolderService } from "./api/folder.service";
import { LabelService } from "./api/label.service";
import { LikeService } from "./api/like.service";
import { OperationService } from "./api/operation.service";
import { PageService } from "./api/page.service";
import { RedactionsService } from "./api/redactions.service";
import { SmartLinkService } from "./api/smartLink.service";
import { SpaceService } from "./api/space.service";
import { SpacePermissionsService } from "./api/spacePermissions.service";
import { SpacePropertiesService } from "./api/spaceProperties.service";
import { SpaceRolesService } from "./api/spaceRoles.service";
import { TaskService } from "./api/task.service";
import { UserService } from "./api/user.service";
import { VersionService } from "./api/version.service";
import { WhiteboardService } from "./api/whiteboard.service";

@Global()
@Module({
  imports: [HttpModule],
  exports: [
    AdminKeyService,
    AncestorsService,
    AttachmentService,
    BlogPostService,
    ChildrenService,
    ClassificationLevelService,
    CommentService,
    ContentService,
    ContentPropertiesService,
    CustomContentService,
    DataPoliciesService,
    DatabaseService,
    DescendantsService,
    EAPService,
    FolderService,
    LabelService,
    LikeService,
    OperationService,
    PageService,
    RedactionsService,
    SmartLinkService,
    SpaceService,
    SpacePermissionsService,
    SpacePropertiesService,
    SpaceRolesService,
    TaskService,
    UserService,
    VersionService,
    WhiteboardService,
  ],
  providers: [
    AdminKeyService,
    AncestorsService,
    AttachmentService,
    BlogPostService,
    ChildrenService,
    ClassificationLevelService,
    CommentService,
    ContentService,
    ContentPropertiesService,
    CustomContentService,
    DataPoliciesService,
    DatabaseService,
    DescendantsService,
    EAPService,
    FolderService,
    LabelService,
    LikeService,
    OperationService,
    PageService,
    RedactionsService,
    SmartLinkService,
    SpaceService,
    SpacePermissionsService,
    SpacePropertiesService,
    SpaceRolesService,
    TaskService,
    UserService,
    VersionService,
    WhiteboardService,
  ],
})
export class ConfluenceApiModule {
  public static forRoot(
    configurationFactory: () => Configuration,
  ): DynamicModule {
    return {
      module: ConfluenceApiModule,
      providers: [{ provide: Configuration, useFactory: configurationFactory }],
    };
  }

  /**
   * Register the module asynchronously.
   */
  static forRootAsync(options: AsyncConfiguration): DynamicModule {
    const providers = [...this.createAsyncProviders(options)];
    return {
      module: ConfluenceApiModule,
      imports: options.imports || [],
      providers,
      exports: providers,
    };
  }

  private static createAsyncProviders(options: AsyncConfiguration): Provider[] {
    if (options.useClass) {
      return [
        this.createAsyncConfigurationProvider(options),
        {
          provide: options.useClass,
          useClass: options.useClass,
        },
      ];
    }
    return [this.createAsyncConfigurationProvider(options)];
  }

  private static createAsyncConfigurationProvider(
    options: AsyncConfiguration,
  ): Provider {
    if (options.useFactory) {
      return {
        provide: Configuration,
        useFactory: options.useFactory,
        inject: options.inject || [],
      };
    }
    return {
      provide: Configuration,
      useFactory: async (optionsFactory: ConfigurationFactory) =>
        await optionsFactory.createConfiguration(),
      inject:
        (options.useExisting && [options.useExisting]) ||
        (options.useClass && [options.useClass]) ||
        [],
    };
  }

  constructor(httpService: HttpService) {}
}
