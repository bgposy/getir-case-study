# getir assessment

# Fork account

[@samedayan](https://github.com/samedayan)

# Deploy heroku

[getir-assessment](https://getir-case-studys.herokuapp.com/)

# How do i run the application

    # 1. Start Install
        * cd src
        * npm install

    # 2. Start Run App
        * npm start

    # 3. Start Run Test
        * npm test

# Endpoint Info

Full Url -> [https://getir-case-studys.herokuapp.com/api/datas](https://getir-case-studys.herokuapp.com/api/datas)

    * POST method -> api/datas
    * startDate” and “endDate” fields will contain the date in a “YYYY-MM-DD” format.
    * You should filter the data using “createdAt”
    * “minCount” and “maxCount” are for filtering the data.
    * Sum of the “count” array in the documents should be between “minCount” and “maxCount”.

    # Sample Request
        {
        "startDate": "2016-01-26",
        "endDate": "2018-02-02",
        "minCount": 2700,
        "maxCount": 3000
        }

    # Sample Response
        {
            "code":0,
            "msg":"Success",
            "records":[{
                "key":"TAKwGc6Jr4i8Z487",
                "createdAt":"2017-01-28T01:22:14.398Z",
                "totalCount":2800
                 }
            ]
        }
