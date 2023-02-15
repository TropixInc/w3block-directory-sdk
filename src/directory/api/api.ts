/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface CreateContextsDto {
  description: string;
  slug: string;
  tenantId?: string;
}

export interface ContextDto {
  /** @format uuid */
  id: string;

  /** @format date-time */
  createdAt: string;

  /** @format date-time */
  updatedAt: string;
  description: string;
  slug: string;

  /** @format uuid */
  tenantId?: string | null;
}

export interface UpdateContextsDto {
  description: string;
  slug: string;
}

export type DuplicatedContextException = object;

export interface CreateDataTypesDto {
  /** @format uuid */
  tenantId: string;
  description: string;
  label: string;
  type: 'file' | 'url' | 'cpf' | 'phone' | 'text' | 'email';
}

export enum DataTypesEnum {
  File = 'file',
  Url = 'url',
  Cpf = 'cpf',
  Phone = 'phone',
  Text = 'text',
  Email = 'email',
}

export interface DataTypesDto {
  /** @format uuid */
  id: string;

  /** @format date-time */
  createdAt: string;

  /** @format date-time */
  updatedAt: string;

  /** @format uuid */
  tenantId: string;
  label: string;
  description: string;

  /** @example cpf */
  type: DataTypesEnum;

  /** @example true */
  enabled: boolean;
}

export interface UpdateDataTypesDto {
  description?: string;
  label?: string;
  enabled?: boolean;
}

export interface CreateUserDocumentsDto {
  /** @format uuid */
  tenantId: string;

  /** @format uuid */
  userId: string;

  /** @format uuid */
  tenantParamsId: string;
  value?: object;
  mediaType?: string;
  assetId?: string;
}

export interface UserDocumentsDto {
  /** @format uuid */
  id: string;

  /** @format date-time */
  createdAt: string;

  /** @format date-time */
  updatedAt: string;

  /** @format uuid */
  tenantId: string;

  /** @format uuid */
  userId: string;

  /** @format uuid */
  tenantParamsId: string;
  value: string;
  mediaType?: string | null;
  assetId?: string | null;
}

export interface UpdateUserDocumentsDto {
  value?: string;
  mediaType?: string;
  assetId: string;
}

export interface CreateUploadSignatureDto {
  /** @format uuid */
  userId: string;

  /** @format uuid */
  tenantParamsId: string;
}

export interface GetUploadSignatureResponseDto {
  publicId: string;
  signature: string;
  timestamp: number;
  uploadPreset: string;
}

export interface CreateTenantParamsDto {
  /** @format uuid */
  tenantId: string;

  /** @format uuid */
  contextId: string;

  /** @format uuid */
  dataTypeId: string;
  order: number;
  mandatory?: boolean;
}

export interface TenantParamsDto {
  /** @format uuid */
  id: string;

  /** @format date-time */
  createdAt: string;

  /** @format date-time */
  updatedAt: string;

  /** @format uuid */
  tenantId: string;
  contextId: string;
  dataTypeId: string;
  dataTypes?: DataTypesDto;
  order: number;
  mandatory: boolean;
  enabled: boolean;
}

export interface UpdateTenantParamsDto {
  order: number;
  mandatory?: boolean;
  enabled?: boolean;
}

export interface CreateTenantContextDto {
  /** @format uuid */
  tenantId: string;

  /** @format uuid */
  contextId: string;
  enabled?: boolean | null;
}

export interface TenantContextsDto {
  /** @format uuid */
  id: string;

  /** @format date-time */
  createdAt: string;

  /** @format date-time */
  updatedAt: string;

  /** @format uuid */
  tenantId: string;
  contextId: string;
  context?: ContextDto | null;
  enabled: boolean;
}

export enum AssetTypeEnum {
  Image = 'image',
  Document = 'document',
}

export enum AssetTargetEnum {
  UserDocument = 'userDocument',
}

export interface RequestAssetUploadDto {
  /** @example image */
  type: AssetTypeEnum;

  /** @example userDocument */
  target: AssetTargetEnum;
}

export interface CloudinaryProviderUploadParamsDto {
  /** @example 000000000000 */
  apiKey: string;

  /** @example 1666215568 */
  timestamp: number;

  /** @example directory/3fa85f64-5717-4562-b3fc-2c963f66afa6 */
  publicId: string;

  /** @example bfd09f95f331f558cbd1320e67aa8d488770583e */
  signature: string;

  /** @example filename_override=false&public_id=directory/3fa85f64-5717-4562-b3fc-2c963f66afa6&timestamp=1666215568&unique_filename=true&upload_preset=upload_preset&api_key=000000000000&signature=bfd09f95f331f558cbd1320e67aa8d488770583e */
  signedParams: string;

  /** @example {"filename_override":"false","public_id":"directory/3fa85f64-5717-4562-b3fc-2c963f66afa6","timestamp":"1666215568","unique_filename":"true"} */
  queryParams: object;

  /** @example upload_preset */
  uploadPreset: string;
}

export enum AssetType {
  Image = 'image',
  Document = 'document',
}

export enum AssetStatus {
  WaitingUpload = 'waitingUpload',
  WaitingAssociation = 'waitingAssociation',
  Associated = 'associated',
  Excluded = 'excluded',
  Expired = 'expired',
}

export enum AssetProvider {
  Cloudinary = 'cloudinary',
}

export enum AssetTarget {
  UserDocument = 'userDocument',
}

export interface AssetEntityWithProviderUploadParamsDto {
  /** @format uuid */
  id: string;

  /** @format date-time */
  createdAt: string;

  /** @format date-time */
  updatedAt: string;

  /** @format uuid */
  tenantId: string;

  /** @example image */
  type: AssetType;

  /** @example associated */
  status: AssetStatus;

  /** @example cloudinary */
  provider: AssetProvider;

  /** @example https://dummyimage.com/200x200/fff/000 */
  directLink?: string | null;

  /** @example userDocument */
  target?: AssetTarget | null;
  providerUploadParams: CloudinaryProviderUploadParamsDto;
}

export enum StatusUsersStatuses {
  Pending = 'pending',
  Approved = 'approved',
  Rejected = 'rejected',
}

export interface CreateUserStatusDto {
  /** @format uuid */
  contextId: string;

  /** @format uuid */
  tenantId: string;

  /** @format uuid */
  userId: string;

  /** @example pending */
  status: StatusUsersStatuses;
  reason?: string;
}

export interface CustomerStatusDto {
  /** @format uuid */
  id: string;

  /** @format date-time */
  createdAt: string;

  /** @format date-time */
  updatedAt: string;

  /** @format uuid */
  tenantId: string;

  /** @format uuid */
  userId: string;

  /** @format uuid */
  contextId: string;
  reason?: string | null;

  /** @example pending */
  status: StatusUsersStatuses;
}

export interface UpdateUserStatusDto {
  /** @example pending */
  status: StatusUsersStatuses;
  reason?: string;
}

export namespace Contexts {
  /**
   * @description Create a new context
   * @tags Contexts
   * @name Create
   * @request POST:/contexts
   * @secure
   */
  export namespace Create {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateContextsDto;
    export type RequestHeaders = {};
    export type ResponseBody = ContextDto;
  }
  /**
   * @description Returns all contexts
   * @tags Contexts
   * @name ListAll
   * @request GET:/contexts
   * @secure
   */
  export namespace ListAll {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ContextDto[];
  }
  /**
   * @description Update a context by id
   * @tags Contexts
   * @name Update
   * @request PATCH:/contexts/{id}
   * @secure
   */
  export namespace Update {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = UpdateContextsDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * @description Delete a context by id
   * @tags Contexts
   * @name Delete
   * @request DELETE:/contexts/{id}
   * @secure
   */
  export namespace Delete {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
}

export namespace DataTypes {
  /**
   * @description Create a new data type
   * @tags Data Types
   * @name Create
   * @request POST:/data-types
   * @secure
   */
  export namespace Create {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateDataTypesDto;
    export type RequestHeaders = {};
    export type ResponseBody = DataTypesDto;
  }
  /**
   * @description Get all data types for a tenant
   * @tags Data Types
   * @name ListBy
   * @request GET:/data-types/{tenantId}
   * @secure
   */
  export namespace ListBy {
    export type RequestParams = { tenantId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DataTypesDto[];
  }
  /**
   * @description Updates a data type by tenant and data type id
   * @tags Data Types
   * @name Update
   * @request PATCH:/data-types/{tenantId}/{dataTypeId}
   * @secure
   */
  export namespace Update {
    export type RequestParams = { tenantId: string; dataTypeId: string };
    export type RequestQuery = {};
    export type RequestBody = UpdateDataTypesDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
}

export namespace UsersDocuments {
  /**
   * @description Create a new user document
   * @tags User Documents
   * @name Create
   * @request POST:/users-documents
   * @secure
   */
  export namespace Create {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateUserDocumentsDto;
    export type RequestHeaders = {};
    export type ResponseBody = UserDocumentsDto;
  }
  /**
   * @description Returns all user documents by tenant and user
   * @tags User Documents
   * @name ListBy
   * @request GET:/users-documents/{tenantId}/{userId}
   * @secure
   */
  export namespace ListBy {
    export type RequestParams = { tenantId: string; userId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = UserDocumentsDto[];
  }
  /**
   * @description Updates a user document by id
   * @tags User Documents
   * @name Update
   * @request PATCH:/users-documents/{tenantId}/{documentId}
   * @secure
   */
  export namespace Update {
    export type RequestParams = { tenantId: string; documentId: string };
    export type RequestQuery = {};
    export type RequestBody = UpdateUserDocumentsDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * @description Generate a signature for upload a document
   * @tags User Documents
   * @name GetSignatureToUploadDocument
   * @request POST:/users-documents/{tenantId}/generate-signature
   * @deprecated
   */
  export namespace GetSignatureToUploadDocument {
    export type RequestParams = { tenantId: string };
    export type RequestQuery = {};
    export type RequestBody = CreateUploadSignatureDto;
    export type RequestHeaders = {};
    export type ResponseBody = GetUploadSignatureResponseDto;
  }
}

export namespace TenantParams {
  /**
   * @description Create a new tenant params
   * @tags Tenant Params
   * @name Create
   * @request POST:/tenant-params
   * @secure
   */
  export namespace Create {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateTenantParamsDto;
    export type RequestHeaders = {};
    export type ResponseBody = TenantParamsDto;
  }
  /**
   * @description Get all tenant param by tenant
   * @tags Tenant Params
   * @name ListBy
   * @request GET:/tenant-params/{tenantId}
   */
  export namespace ListBy {
    export type RequestParams = { tenantId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TenantParamsDto[];
  }
  /**
   * @description Get all tenant param by tenant and context
   * @tags Tenant Params
   * @name ListByContext
   * @request GET:/tenant-params/{tenantId}/{contextId}
   */
  export namespace ListByContext {
    export type RequestParams = { tenantId: string; contextId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TenantParamsDto[];
  }
  /**
   * @description Get all tenant param by tenant and context
   * @tags Tenant Params
   * @name ListBySlugContext
   * @request GET:/tenant-params/{tenantId}/slug/{slug}
   */
  export namespace ListBySlugContext {
    export type RequestParams = { tenantId: string; slug: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TenantParamsDto[];
  }
  /**
   * @description Updates a tenant params
   * @tags Tenant Params
   * @name Update
   * @request PATCH:/tenant-params/{tenantId}/{tenantParamsId}
   * @secure
   */
  export namespace Update {
    export type RequestParams = { tenantId: string; tenantParamsId: string };
    export type RequestQuery = {};
    export type RequestBody = UpdateTenantParamsDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
}

export namespace TenantContexts {
  /**
   * @description Create a new context for a tenant
   * @tags Tenant Contexts
   * @name Create
   * @request POST:/tenant-contexts
   * @secure
   */
  export namespace Create {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateTenantContextDto;
    export type RequestHeaders = {};
    export type ResponseBody = TenantContextsDto;
  }
  /**
   * @description Returns all contexts for a tenant
   * @tags Tenant Contexts
   * @name ListBy
   * @request GET:/tenant-contexts/{tenantId}
   * @secure
   */
  export namespace ListBy {
    export type RequestParams = { tenantId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TenantContextsDto[];
  }
  /**
   * @description Delete a context by tenant and context id
   * @tags Tenant Contexts
   * @name Delete
   * @request DELETE:/tenant-contexts/{tenantId}/{contextId}
   * @secure
   */
  export namespace Delete {
    export type RequestParams = { tenantId: string; contextId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * @description Activate a context by tenant and slug
   * @tags Tenant Contexts
   * @name ActivateBySlug
   * @request PATCH:/tenant-contexts/{tenantId}/{slug}/activate
   * @secure
   */
  export namespace ActivateBySlug {
    export type RequestParams = { tenantId: string; slug: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * @description Deactivate a context by tenant and slug
   * @tags Tenant Contexts
   * @name DeactivateBySlug
   * @request PATCH:/tenant-contexts/{tenantId}/slug/{slug}/deactivate
   * @secure
   */
  export namespace DeactivateBySlug {
    export type RequestParams = { tenantId: string; slug: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * @description Activate signup for a tenant
   * @tags Tenant Contexts
   * @name ActivateSignup
   * @request GET:/tenant-contexts/activate-signup/{tenantId}
   * @deprecated
   * @secure
   */
  export namespace ActivateSignup {
    export type RequestParams = { tenantId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * @description Deactivate signup for a tenant
   * @tags Tenant Contexts
   * @name DeactivateSignup
   * @request GET:/tenant-contexts/deactivate-signup/{tenantId}
   * @deprecated
   * @secure
   */
  export namespace DeactivateSignup {
    export type RequestParams = { tenantId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
}

export namespace Assets {
  /**
   * @description Creates a new request to upload some asset (image or pdf) in our service. You must use this endpoint response to upload assets using the specific provider apis (ex: Cloudinary)
   * @tags Assets
   * @name RequestUpload
   * @request POST:/assets/{tenantId}
   */
  export namespace RequestUpload {
    export type RequestParams = { tenantId: string };
    export type RequestQuery = {};
    export type RequestBody = RequestAssetUploadDto;
    export type RequestHeaders = {};
    export type ResponseBody = AssetEntityWithProviderUploadParamsDto;
  }
}

export namespace UsersStatus {
  /**
   * @description Create a new user status
   * @tags User Status
   * @name Create
   * @request POST:/users-status
   * @secure
   */
  export namespace Create {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateUserStatusDto;
    export type RequestHeaders = {};
    export type ResponseBody = CustomerStatusDto;
  }
  /**
   * @description Find user status by context, tenant and user
   * @tags User Status
   * @name GetBy
   * @request GET:/users-status/{tenantId}/{contextId}/{userId}
   * @secure
   */
  export namespace GetBy {
    export type RequestParams = { tenantId: string; contextId: string; userId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CustomerStatusDto;
  }
  /**
   * @description Update user status by context, tenant and user
   * @tags User Status
   * @name Update
   * @request PATCH:/users-status/{tenantId}/{contextId}/{userId}
   * @secure
   */
  export namespace Update {
    export type RequestParams = { tenantId: string; contextId: string; userId: string };
    export type RequestQuery = {};
    export type RequestBody = UpdateUserStatusDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from 'axios';

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, 'data' | 'params' | 'url' | 'responseType'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, 'data' | 'cancelToken'> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || '' });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.instance.defaults.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      formData.append(
        key,
        property instanceof Blob
          ? property
          : typeof property === 'object' && property !== null
          ? JSON.stringify(property)
          : `${property}`,
      );
      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = (format && this.format) || void 0;

    if (type === ContentType.FormData && body && body !== null && typeof body === 'object') {
      requestParams.headers.common = { Accept: '*/*' };
      requestParams.headers.post = {};
      requestParams.headers.put = {};

      body = this.createFormData(body as Record<string, unknown>);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
        ...(requestParams.headers || {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title Directory
 * @version 0.0.1
 * @contact
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  contexts = {
    /**
     * @description Create a new context
     *
     * @tags Contexts
     * @name Create
     * @request POST:/contexts
     * @secure
     */
    create: (data: CreateContextsDto, params: RequestParams = {}) =>
      this.request<ContextDto, void | { statusCode: number; message: string; error?: string }>({
        path: `/contexts`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Returns all contexts
     *
     * @tags Contexts
     * @name ListAll
     * @request GET:/contexts
     * @secure
     */
    listAll: (params: RequestParams = {}) =>
      this.request<ContextDto[], void>({
        path: `/contexts`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Update a context by id
     *
     * @tags Contexts
     * @name Update
     * @request PATCH:/contexts/{id}
     * @secure
     */
    update: (id: string, data: UpdateContextsDto, params: RequestParams = {}) =>
      this.request<void, void | DuplicatedContextException>({
        path: `/contexts/${id}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Delete a context by id
     *
     * @tags Contexts
     * @name Delete
     * @request DELETE:/contexts/{id}
     * @secure
     */
    delete: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/contexts/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),
  };
  dataTypes = {
    /**
     * @description Create a new data type
     *
     * @tags Data Types
     * @name Create
     * @request POST:/data-types
     * @secure
     */
    create: (data: CreateDataTypesDto, params: RequestParams = {}) =>
      this.request<DataTypesDto, void>({
        path: `/data-types`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get all data types for a tenant
     *
     * @tags Data Types
     * @name ListBy
     * @request GET:/data-types/{tenantId}
     * @secure
     */
    listBy: (tenantId: string, params: RequestParams = {}) =>
      this.request<DataTypesDto[], void>({
        path: `/data-types/${tenantId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Updates a data type by tenant and data type id
     *
     * @tags Data Types
     * @name Update
     * @request PATCH:/data-types/{tenantId}/{dataTypeId}
     * @secure
     */
    update: (tenantId: string, dataTypeId: string, data: UpdateDataTypesDto, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/data-types/${tenantId}/${dataTypeId}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  usersDocuments = {
    /**
     * @description Create a new user document
     *
     * @tags User Documents
     * @name Create
     * @request POST:/users-documents
     * @secure
     */
    create: (data: CreateUserDocumentsDto, params: RequestParams = {}) =>
      this.request<UserDocumentsDto, any>({
        path: `/users-documents`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Returns all user documents by tenant and user
     *
     * @tags User Documents
     * @name ListBy
     * @request GET:/users-documents/{tenantId}/{userId}
     * @secure
     */
    listBy: (tenantId: string, userId: string, params: RequestParams = {}) =>
      this.request<UserDocumentsDto[], any>({
        path: `/users-documents/${tenantId}/${userId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Updates a user document by id
     *
     * @tags User Documents
     * @name Update
     * @request PATCH:/users-documents/{tenantId}/{documentId}
     * @secure
     */
    update: (tenantId: string, documentId: string, data: UpdateUserDocumentsDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/users-documents/${tenantId}/${documentId}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Generate a signature for upload a document
     *
     * @tags User Documents
     * @name GetSignatureToUploadDocument
     * @request POST:/users-documents/{tenantId}/generate-signature
     * @deprecated
     */
    getSignatureToUploadDocument: (tenantId: string, data: CreateUploadSignatureDto, params: RequestParams = {}) =>
      this.request<GetUploadSignatureResponseDto, any>({
        path: `/users-documents/${tenantId}/generate-signature`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  tenantParams = {
    /**
     * @description Create a new tenant params
     *
     * @tags Tenant Params
     * @name Create
     * @request POST:/tenant-params
     * @secure
     */
    create: (data: CreateTenantParamsDto, params: RequestParams = {}) =>
      this.request<TenantParamsDto, void | { statusCode: number; message: string; error?: string }>({
        path: `/tenant-params`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get all tenant param by tenant
     *
     * @tags Tenant Params
     * @name ListBy
     * @request GET:/tenant-params/{tenantId}
     */
    listBy: (tenantId: string, params: RequestParams = {}) =>
      this.request<TenantParamsDto[], any>({
        path: `/tenant-params/${tenantId}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Get all tenant param by tenant and context
     *
     * @tags Tenant Params
     * @name ListByContext
     * @request GET:/tenant-params/{tenantId}/{contextId}
     */
    listByContext: (tenantId: string, contextId: string, params: RequestParams = {}) =>
      this.request<TenantParamsDto[], any>({
        path: `/tenant-params/${tenantId}/${contextId}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Get all tenant param by tenant and context
     *
     * @tags Tenant Params
     * @name ListBySlugContext
     * @request GET:/tenant-params/{tenantId}/slug/{slug}
     */
    listBySlugContext: (tenantId: string, slug: string, params: RequestParams = {}) =>
      this.request<TenantParamsDto[], { statusCode: number; message: string; error?: string }>({
        path: `/tenant-params/${tenantId}/slug/${slug}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Updates a tenant params
     *
     * @tags Tenant Params
     * @name Update
     * @request PATCH:/tenant-params/{tenantId}/{tenantParamsId}
     * @secure
     */
    update: (tenantId: string, tenantParamsId: string, data: UpdateTenantParamsDto, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/tenant-params/${tenantId}/${tenantParamsId}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  tenantContexts = {
    /**
     * @description Create a new context for a tenant
     *
     * @tags Tenant Contexts
     * @name Create
     * @request POST:/tenant-contexts
     * @secure
     */
    create: (data: CreateTenantContextDto, params: RequestParams = {}) =>
      this.request<TenantContextsDto, void | { statusCode: number; message: string; error?: string }>({
        path: `/tenant-contexts`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Returns all contexts for a tenant
     *
     * @tags Tenant Contexts
     * @name ListBy
     * @request GET:/tenant-contexts/{tenantId}
     * @secure
     */
    listBy: (tenantId: string, params: RequestParams = {}) =>
      this.request<TenantContextsDto[], void>({
        path: `/tenant-contexts/${tenantId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Delete a context by tenant and context id
     *
     * @tags Tenant Contexts
     * @name Delete
     * @request DELETE:/tenant-contexts/{tenantId}/{contextId}
     * @secure
     */
    delete: (tenantId: string, contextId: string, params: RequestParams = {}) =>
      this.request<void, void | { statusCode: number; message: string; error?: string }>({
        path: `/tenant-contexts/${tenantId}/${contextId}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description Activate a context by tenant and slug
     *
     * @tags Tenant Contexts
     * @name ActivateBySlug
     * @request PATCH:/tenant-contexts/{tenantId}/{slug}/activate
     * @secure
     */
    activateBySlug: (tenantId: string, slug: string, params: RequestParams = {}) =>
      this.request<void, void | { statusCode: number; message: string; error?: string }>({
        path: `/tenant-contexts/${tenantId}/${slug}/activate`,
        method: 'PATCH',
        secure: true,
        ...params,
      }),

    /**
     * @description Deactivate a context by tenant and slug
     *
     * @tags Tenant Contexts
     * @name DeactivateBySlug
     * @request PATCH:/tenant-contexts/{tenantId}/slug/{slug}/deactivate
     * @secure
     */
    deactivateBySlug: (tenantId: string, slug: string, params: RequestParams = {}) =>
      this.request<void, void | { statusCode: number; message: string; error?: string }>({
        path: `/tenant-contexts/${tenantId}/slug/${slug}/deactivate`,
        method: 'PATCH',
        secure: true,
        ...params,
      }),

    /**
     * @description Activate signup for a tenant
     *
     * @tags Tenant Contexts
     * @name ActivateSignup
     * @request GET:/tenant-contexts/activate-signup/{tenantId}
     * @deprecated
     * @secure
     */
    activateSignup: (tenantId: string, params: RequestParams = {}) =>
      this.request<void, void | { statusCode: number; message: string; error?: string }>({
        path: `/tenant-contexts/activate-signup/${tenantId}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description Deactivate signup for a tenant
     *
     * @tags Tenant Contexts
     * @name DeactivateSignup
     * @request GET:/tenant-contexts/deactivate-signup/{tenantId}
     * @deprecated
     * @secure
     */
    deactivateSignup: (tenantId: string, params: RequestParams = {}) =>
      this.request<void, void | { statusCode: number; message: string; error?: string }>({
        path: `/tenant-contexts/deactivate-signup/${tenantId}`,
        method: 'GET',
        secure: true,
        ...params,
      }),
  };
  assets = {
    /**
     * @description Creates a new request to upload some asset (image or pdf) in our service. You must use this endpoint response to upload assets using the specific provider apis (ex: Cloudinary)
     *
     * @tags Assets
     * @name RequestUpload
     * @request POST:/assets/{tenantId}
     */
    requestUpload: (tenantId: string, data: RequestAssetUploadDto, params: RequestParams = {}) =>
      this.request<AssetEntityWithProviderUploadParamsDto, any>({
        path: `/assets/${tenantId}`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  usersStatus = {
    /**
     * @description Create a new user status
     *
     * @tags User Status
     * @name Create
     * @request POST:/users-status
     * @secure
     */
    create: (data: CreateUserStatusDto, params: RequestParams = {}) =>
      this.request<CustomerStatusDto, void>({
        path: `/users-status`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Find user status by context, tenant and user
     *
     * @tags User Status
     * @name GetBy
     * @request GET:/users-status/{tenantId}/{contextId}/{userId}
     * @secure
     */
    getBy: (tenantId: string, contextId: string, userId: string, params: RequestParams = {}) =>
      this.request<CustomerStatusDto, void>({
        path: `/users-status/${tenantId}/${contextId}/${userId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Update user status by context, tenant and user
     *
     * @tags User Status
     * @name Update
     * @request PATCH:/users-status/{tenantId}/{contextId}/{userId}
     * @secure
     */
    update: (
      tenantId: string,
      contextId: string,
      userId: string,
      data: UpdateUserStatusDto,
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/users-status/${tenantId}/${contextId}/${userId}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
}
