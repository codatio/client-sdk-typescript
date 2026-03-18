## Typescript SDK Changes:
* `codatsyncexpenses.connections.create()`:  `response.connectionInfo.Map<any>` **Changed** (Breaking ⚠️)
* `codatsyncexpenses.companies.list()`: 
  *  `request.tags` **Added**
  *  `response.results[].dataConnections[].connectionInfo.Map<any>` **Changed** (Breaking ⚠️)
* `codatsyncexpenses.companies.create()`:  `response.dataConnections[].connectionInfo.Map<any>` **Changed** (Breaking ⚠️)
* `codatsyncexpenses.companies.update()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `companyRequestBody` **Removed** (Breaking ⚠️)
    - `companyUpdateRequest` **Added**
  *  `response.dataConnections[].connectionInfo.Map<any>` **Changed** (Breaking ⚠️)
* `codatsyncexpenses.companies.get()`:  `response.dataConnections[].connectionInfo.Map<any>` **Changed** (Breaking ⚠️)
* `codatsyncexpenses.connections.list()`:  `response.results[].connectionInfo.Map<any>` **Changed** (Breaking ⚠️)
* `codatsyncexpenses.connections.get()`:  `response.connectionInfo.Map<any>` **Changed** (Breaking ⚠️)
* `codatsyncexpenses.connections.unlink()`:  `response.connectionInfo.Map<any>` **Changed** (Breaking ⚠️)
* `codatsyncexpenses.connections.createPartnerExpenseConnection()`:  `response.connectionInfo.Map<any>` **Changed** (Breaking ⚠️)
* `codatsyncexpenses.companies.replace()`: **Added**
* `codatsyncexpenses.manageData.refreshAllDataTypes()`:  `error.status[400]` **Added**
* `codatsyncexpenses.manageData.get()`:  `response.accountTransactions.lastSuccessfulSync` **Changed**
* `codatsyncexpenses.manageData.refreshDataType()`:  `error.status[400]` **Added**
