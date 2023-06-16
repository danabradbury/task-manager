# TaskManager.DefaultApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteTaskDeleteTaskId**](DefaultApi.md#deleteTaskDeleteTaskId) | **DELETE** /task/{id} | deleteTask
[**getTaskGetTaskId**](DefaultApi.md#getTaskGetTaskId) | **GET** /task/{id} | getTask
[**postTaskPostTask**](DefaultApi.md#postTaskPostTask) | **POST** /task | postTask
[**putTaskPutTaskId**](DefaultApi.md#putTaskPutTaskId) | **PUT** /task/{id} | putTask



## deleteTaskDeleteTaskId

> deleteTaskDeleteTaskId(id)

deleteTask

### Example

```javascript
import TaskManager from 'task_manager';

let apiInstance = new TaskManager.DefaultApi();
let id = "id_example"; // String | 
apiInstance.deleteTaskDeleteTaskId(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getTaskGetTaskId

> getTaskGetTaskId(id)

getTask

### Example

```javascript
import TaskManager from 'task_manager';

let apiInstance = new TaskManager.DefaultApi();
let id = "id_example"; // String | 
apiInstance.getTaskGetTaskId(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## postTaskPostTask

> postTaskPostTask()

postTask

### Example

```javascript
import TaskManager from 'task_manager';

let apiInstance = new TaskManager.DefaultApi();
apiInstance.postTaskPostTask((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## putTaskPutTaskId

> putTaskPutTaskId(id)

putTask

### Example

```javascript
import TaskManager from 'task_manager';

let apiInstance = new TaskManager.DefaultApi();
let id = "id_example"; // String | 
apiInstance.putTaskPutTaskId(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

