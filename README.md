# postman-demos

Postman Test commands: 

Without Iteration Data:
postman collection run "27254826-ace7249e-9d48-4d5e-86fa-76fbd58c099c" -e "27254826-d1bc99de-b648-44ab-9c3e-b65f6f8a81bb" 

With Iteration Data: 
postman collection run "27254826-ace7249e-9d48-4d5e-86fa-76fbd58c099c" -e "27254826-d1bc99de-b648-44ab-9c3e-b65f6f8a81bb" --iteration-data api-tests/iteration-001-test-data.json