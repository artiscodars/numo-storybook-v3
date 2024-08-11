# FileUpload Component

The `FileUpload` component allows users to upload files through a user-friendly interface. It is built with PrimeNG's `FileUploadModule` and provides various configuration options to handle file uploads efficiently.

## Overview

The `FileUpload` component supports different modes and configurations for file uploads. It integrates seamlessly with Angular forms and provides feedback on upload progress. This component is useful in scenarios where users need to upload files, such as profile pictures, documents, or other types of files.


## Properties

### `name`
- **Type**: `string`
- **Default**: `null`
- **Description**: Name of the request parameter used to identify the files on the backend.

### `url`
- **Type**: `string`
- **Default**: `null`
- **Description**: Remote URL to which the files will be uploaded.

### `method`
- **Type**: `"post" | "put"`
- **Default**: `"post"`
- **Description**: HTTP method used to send files to the URL (e.g., `"post"`, `"put"`).

### `multiple`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Allows selecting multiple files at once from the file dialog.

### `accept`
- **Type**: `string`
- **Default**: `null`
- **Description**: Comma-separated list of patterns to restrict the allowed file types. This can include MIME types (e.g., `"image/*"`) or file extensions (e.g., `".jpg"`).

### `disabled`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Disables the upload functionality when set to `true`.

### `auto`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: When enabled, the upload begins automatically after a file is selected.

### `withCredentials`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Indicates whether cross-site Access-Control requests should be made with credentials such as cookies, authorization headers, or TLS client certificates.

### `maxFileSize`
- **Type**: `number`
- **Default**: `null`
- **Description**: Maximum file size allowed for upload, in bytes.

### `invalidFileSizeMessageSummary`
- **Type**: `string`
- **Default**: `"{0}: Invalid file size"`
- **Description**: Summary message displayed when the file size is invalid.

### `invalidFileSizeMessageDetail`
- **Type**: `string`
- **Default**: `"maximum upload size is {0}"`
- **Description**: Detailed message displayed when the file size is invalid.

### `invalidFileTypeMessageSummary`
- **Type**: `string`
- **Default**: `"{0}: Invalid file type"`
- **Description**: Summary message displayed when the file type is invalid.

### `invalidFileTypeMessageDetail`
- **Type**: `string`
- **Default**: `"allowed file types: {0}"`
- **Description**: Detailed message displayed when the file type is invalid.

### `invalidFileLimitMessageSummary`
- **Type**: `string`
- **Default**: `"Maximum number of files exceeded"`
- **Description**: Summary message displayed when the maximum number of files is exceeded.

### `invalidFileLimitMessageDetail`
- **Type**: `string`
- **Default**: `"limit is {0} at most"`
- **Description**: Detailed message displayed when the maximum number of files is exceeded.

### `style`
- **Type**: `Object`
- **Default**: `null`
- **Description**: Inline style of the element.

### `styleClass`
- **Type**: `string`
- **Default**: `null`
- **Description**: CSS class applied to the element.

### `previewWidth`
- **Type**: `number`
- **Default**: `50`
- **Description**: Width of the image thumbnail preview in pixels.

### `chooseLabel`
- **Type**: `string`
- **Default**: `null`
- **Description**: Label for the choose button. Defaults to PrimeNG Locale configuration.

### `uploadLabel`
- **Type**: `string`
- **Default**: `null`
- **Description**: Label for the upload button. Defaults to PrimeNG Locale configuration.

### `cancelLabel`
- **Type**: `string`
- **Default**: `null`
- **Description**: Label for the cancel button. Defaults to PrimeNG Locale configuration.

### `chooseIcon`
- **Type**: `string`
- **Default**: `null`
- **Description**: Icon for the choose button.

### `uploadIcon`
- **Type**: `string`
- **Default**: `null`
- **Description**: Icon for the upload button.

### `cancelIcon`
- **Type**: `string`
- **Default**: `null`
- **Description**: Icon for the cancel button.

### `showUploadButton`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Whether to display the upload button.

### `showCancelButton`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Whether to display the cancel button.

### `mode`
- **Type**: `"basic" | "advanced"`
- **Default**: `"advanced"`
- **Description**: Defines the UI mode of the component.

### `headers`
- **Type**: `HttpHeaders`
- **Default**: `null`
- **Description**: Custom HTTP headers for the request.

### `customUpload`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to use a custom upload implementation defined in the `uploadHandler` callback.

### `fileLimit`
- **Type**: `number`
- **Default**: `null`
- **Description**: Maximum number of files that can be uploaded.

### `uploadStyleClass`
- **Type**: `string`
- **Default**: `null`
- **Description**: CSS class for the upload button.

### `cancelStyleClass`
- **Type**: `string`
- **Default**: `null`
- **Description**: CSS class for the cancel button.

### `removeStyleClass`
- **Type**: `string`
- **Default**: `null`
- **Description**: CSS class for the remove button.

### `chooseStyleClass`
- **Type**: `string`
- **Default**: `null`
- **Description**: CSS class for the choose button.

## Usage

The `FileUpload` component is versatile and can be customized with various properties to fit different requirements. Use the provided properties to configure the upload behavior, user interface, and validation messages.

```html
<p-fileUpload 
    name="demo[]" 
    url="https://www.primefaces.org/cdn/api/upload.php" 
    method="post" 
    multiple 
    accept="image/*" 
    disabled 
    auto 
    withCredentials 
    maxFileSize="1000000" 
    invalidFileSizeMessageSummary="{0}: Invalid file size" 
    invalidFileSizeMessageDetail="maximum upload size is {0}" 
    invalidFileTypeMessageSummary="{0}: Invalid file type" 
    invalidFileTypeMessageDetail="allowed file types: {0}" 
    invalidFileLimitMessageSummary="Maximum number of files exceeded" 
    invalidFileLimitMessageDetail="limit is {0} at most" 
    styleClass="custom-file-upload" 
    previewWidth="100" 
    chooseLabel="Select" 
    uploadLabel="Upload" 
    cancelLabel="Cancel" 
    chooseIcon="pi pi-plus" 
    uploadIcon="pi pi-check" 
    cancelIcon="pi pi-times" 
    showUploadButton="true" 
    showCancelButton="true" 
    mode="basic" 
    [headers]="customHeaders" 
    customUpload 
    fileLimit="5" 
    uploadStyleClass="upload-btn" 
    cancelStyleClass="cancel-btn" 
    removeStyleClass="remove-btn" 
    chooseStyleClass="choose-btn" 
/>
```