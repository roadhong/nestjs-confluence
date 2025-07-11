import type { HttpService } from "@nestjs/axios";
import { ModuleMetadata, Type } from "@nestjs/common/interfaces";

export interface ConfigurationParameters {
  apiKeys?: { [key: string]: string };
  username?: string;
  password?: string;
  accessToken?: string | Promise<string> | (() => string | Promise<string>);
  basePath?: string;
  withCredentials?: boolean;
  httpClient?: HttpService;
}

export class Configuration {
  apiKeys?: { [key: string]: string };
  username?: string;
  password?: string;
  accessToken?: string | Promise<string> | (() => string | Promise<string>);
  basePath?: string;
  withCredentials?: boolean;
  httpClient?: HttpService;

  constructor(configurationParameters: ConfigurationParameters = {}) {
    this.apiKeys = configurationParameters.apiKeys;
    this.username = configurationParameters.username;
    this.password = configurationParameters.password;
    this.accessToken = configurationParameters.accessToken;
    this.basePath = configurationParameters.basePath;
    this.withCredentials = configurationParameters.withCredentials;
    this.httpClient = configurationParameters.httpClient;
  }

  /**
   * Select the correct content-type to use for a request.
   * Uses {@link Configuration#isJsonMime} to determine the correct content-type.
   * If no content type is found return the first found type if the contentTypes is not empty
   * @param contentTypes - the array of content types that are available for selection
   * @returns the selected content-type or <code>undefined</code> if no selection could be made.
   */
  public selectHeaderContentType(contentTypes: string[]): string | undefined {
    if (contentTypes.length == 0) {
      return undefined;
    }

    let type = contentTypes.find((x) => this.isJsonMime(x));
    if (type === undefined) {
      return contentTypes[0];
    }
    return type;
  }

  /**
   * Select the correct accept content-type to use for a request.
   * Uses {@link Configuration#isJsonMime} to determine the correct accept content-type.
   * If no content type is found return the first found type if the contentTypes is not empty
   * @param accepts - the array of content types that are available for selection.
   * @returns the selected content-type or <code>undefined</code> if no selection could be made.
   */
  public selectHeaderAccept(accepts: string[]): string | undefined {
    if (accepts.length == 0) {
      return undefined;
    }

    let type = accepts.find((x) => this.isJsonMime(x));
    if (type === undefined) {
      return accepts[0];
    }
    return type;
  }

  /**
   * Check if the given MIME is a JSON MIME.
   * JSON MIME examples:
   *   application/json
   *   application/json; charset=UTF8
   *   APPLICATION/JSON
   *   application/vnd.company+json
   * @param mime - MIME (Multipurpose Internet Mail Extensions)
   * @return True if the given MIME is JSON, false otherwise.
   */
  public isJsonMime(mime: string): boolean {
    const jsonMime: RegExp = new RegExp(
      "^(application/json|[^;/ \t]+/[^;/ \t]+[+]json)[ \t]*(;.*)?$",
      "i",
    );
    return (
      mime != null &&
      (jsonMime.test(mime) ||
        mime.toLowerCase() === "application/json-patch+json")
    );
  }
}

export interface ConfigurationFactory {
  createConfiguration(): Promise<Configuration> | Configuration;
}

export interface AsyncConfiguration extends Pick<ModuleMetadata, "imports"> {
  /**
   * The `useExisting` syntax allows you to create aliases for existing providers.
   */
  useExisting?: Type<ConfigurationFactory>;
  /**
   * The `useClass` syntax allows you to dynamically determine a class
   * that a token should resolve to.
   */
  useClass?: Type<ConfigurationFactory>;
  /**
   * The `useFactory` syntax allows for creating providers dynamically.
   */
  useFactory?: (...args: any[]) => Promise<Configuration> | Configuration;
  /**
   * Optional list of providers to be injected into the context of the Factory function.
   */
  inject?: any[];
}
