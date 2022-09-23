# Training Management System

## API Lists:

## Register User API:
###### Requests:
...
{
    "name":"user",
    "email":"user@mail.com",
    "role":"user",
    "username":"user",
    "password":"user"
}
...
###### Response:
...
{
    "message": "User is registered successfully",
    "success": true
}
...
## Login User API
###### Requests:
...
{
    "username": "user",
    "password": "user"
}
...
###### Response:
...
{
    "username": "user",
    "role": "user",
    "email": "user@mail.com",
    "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjMyZDExZTZhODYyYzg2YjEwYTcxYzIzIiwicm9sZSI6InVzZXIiLCJ1c2VybmFtZSI6InVzZXIiLCJlbWFpbCI6InVzZXJAbWFpbC5jb20iLCJpYXQiOjE2NjM4OTgxMTYsImV4cCI6MTY2NDUwMjkxNn0.1-agLO6xtH2JXR7U9v6f4WxmIhWbppzxXe_wMHX0kNQ",
    "message": "Login success",
    "success": true
}
...

# Protected API

## Show Profile API

###### Requests:
...
Header: 
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjMyZDExZTZhODYyYzg2YjEwYTcxYzIzIiwicm9sZSI6InVzZXIiLCJ1c2VybmFtZSI6InVzZXIiLCJlbWFpbCI6InVzZXJAbWFpbC5jb20iLCJpYXQiOjE2NjM4OTgxMTYsImV4cCI6MTY2NDUwMjkxNn0.1-agLO6xtH2JXR7U9v6f4WxmIhWbppzxXe_wMHX0kNQ
...
    
###### Response:
...
{
    "user": {
        "_id": "632d11e6a862c86b10a71c23",
        "name": "user",
        "email": "user@mail.com",
        "role": "user"
    },
    "message": "success"
}
...

## Update Profile API
###### Requests:
...
Header: 
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjMyZDExZTZhODYyYzg2YjEwYTcxYzIzIiwicm9sZSI6InVzZXIiLCJ1c2VybmFtZSI6InVzZXIiLCJlbWFpbCI6InVzZXJAbWFpbC5jb20iLCJpYXQiOjE2NjM4OTgxMTYsImV4cCI6MTY2NDUwMjkxNn0.1-agLO6xtH2JXR7U9v6f4WxmIhWbppzxXe_wMHX0kNQ
...
###### Response:
...
{
    "message": "User is updated successfully",
    "success": true
}
...

## Update User Password API
###### Requests:
...
Header: 
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjMyZDExZTZhODYyYzg2YjEwYTcxYzIzIiwicm9sZSI6InVzZXIiLCJ1c2VybmFtZSI6InVzZXIiLCJlbWFpbCI6InVzZXJAbWFpbC5jb20iLCJpYXQiOjE2NjM4OTgxMTYsImV4cCI6MTY2NDUwMjkxNn0.1-agLO6xtH2JXR7U9v6f4WxmIhWbppzxXe_wMHX0kNQ

{
    "password":"user2"
}
...
###### Response:
...
{
    "message": "User password is updated successfully",
    "success": true
}
...

## Add Subject API (Admin user)
###### Requests:
...
Header: 
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjMyZDExZTZhODYyYzg2YjEwYTcxYzIzIiwicm9sZSI6InVzZXIiLCJ1c2VybmFtZSI6InVzZXIiLCJlbWFpbCI6InVzZXJAbWFpbC5jb20iLCJpYXQiOjE2NjM4OTgxMTYsImV4cCI6MTY2NDUwMjkxNn0.1-agLO6xtH2JXR7U9v6f4WxmIhWbppzxXe_wMHX0kNQ

{
    "subject": "Finance",
    "stream": "Commerce"
}
...
###### Response:
...
{
    "subject": "Finance",
    "stream": "Commerce",
    "lastModifiedUserId": "632cfb54079f6b62ba8f6995",
    "_id": "632d12d1a862c86b10a71c29",
    "createdAt": "2022-09-23T01:58:41.994Z",
    "updatedAt": "2022-09-23T01:58:41.994Z",
    "__v": 0
}
...

## List Subject with pagination API
...
URL: http://localhost:3000/subjects?page=1&limit=2&sort=asc
...
###### Requests:
...
Header: 
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjMyZDExZTZhODYyYzg2YjEwYTcxYzIzIiwicm9sZSI6InVzZXIiLCJ1c2VybmFtZSI6InVzZXIiLCJlbWFpbCI6InVzZXJAbWFpbC5jb20iLCJpYXQiOjE2NjM4OTgxMTYsImV4cCI6MTY2NDUwMjkxNn0.1-agLO6xtH2JXR7U9v6f4WxmIhWbppzxXe_wMHX0kNQ
...
###### Response:
...
[
    {
        "_id": "632d01c27e421efa4dc66576",
        "subject": "Maths",
        "stream": "Science",
        "lastModifiedUserId": "632cfb54079f6b62ba8f6995",
        "createdAt": "2022-09-23T00:45:54.747Z",
        "updatedAt": "2022-09-23T00:45:54.748Z",
        "__v": 0
    },
    {
        "_id": "632d07150ab9717f5f540ebf",
        "subject": "English",
        "stream": "Arts",
        "lastModifiedUserId": "632cfb54079f6b62ba8f6995",
        "createdAt": "2022-09-23T01:08:37.855Z",
        "updatedAt": "2022-09-23T01:08:37.855Z",
        "__v": 0
    }
]
...
## Add Training API (Admin user)
###### Requests:
...
Header: 
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjMyZDExZTZhODYyYzg2YjEwYTcxYzIzIiwicm9sZSI6InVzZXIiLCJ1c2VybmFtZSI6InVzZXIiLCJlbWFpbCI6InVzZXJAbWFpbC5jb20iLCJpYXQiOjE2NjM4OTgxMTYsImV4cCI6MTY2NDUwMjkxNn0.1-agLO6xtH2JXR7U9v6f4WxmIhWbppzxXe_wMHX0kNQ

{
  "courseName": "Basics of Engg",
  "subjects": ["Maths, Physics, English"],
  "type": "Basic"
}
...

###### Response:
...
{
    "courseName": "Basics of Engg",
    "subjects": [
        "Maths, Physics, English"
    ],
    "type": "Basic",
    "lastModifiedUserId": "632cfb54079f6b62ba8f6995",
    "_id": "632d1334a862c86b10a71c2e",
    "createdAt": "2022-09-23T02:00:20.064Z",
    "updatedAt": "2022-09-23T02:00:20.064Z",
    "__v": 0
}
...

## List Trainings with pagination API
...
URL: http://localhost:3000/trainings?page=1&limit=5&sort=asc
###### Requests:

Header: 
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjMyZDExZTZhODYyYzg2YjEwYTcxYzIzIiwicm9sZSI6InVzZXIiLCJ1c2VybmFtZSI6InVzZXIiLCJlbWFpbCI6InVzZXJAbWFpbC5jb20iLCJpYXQiOjE2NjM4OTgxMTYsImV4cCI6MTY2NDUwMjkxNn0.1-agLO6xtH2JXR7U9v6f4WxmIhWbppzxXe_wMHX0kNQ

...
###### Response:
...
[
    {
        "_id": "632d07690ab9717f5f540ed1",
        "courseName": "Basics of Engg",
        "subjects": [
            "Maths",
            "Physics",
            "English"
        ],
        "type": "Basic",
        "lastModifiedUserId": "632cfb54079f6b62ba8f6995",
        "createdAt": "2022-09-23T01:10:01.497Z",
        "updatedAt": "2022-09-23T01:10:01.497Z",
        "__v": 0
    },
    {
        "_id": "632d078e0ab9717f5f540ed4",
        "courseName": "CA Fundamentals",
        "subjects": [
            "English",
            "Economics",
            "Finance"
        ],
        "type": "Basic",
        "lastModifiedUserId": "632cfb54079f6b62ba8f6995",
        "createdAt": "2022-09-23T01:10:38.057Z",
        "updatedAt": "2022-09-23T01:10:38.057Z",
        "__v": 0
    }
]
...

## List Trainings filter by subjects API
...
URL: http://localhost:3000/trainings?page=1&limit=5&sort=asc&filterBy=subjects&filterValue=Math
...
###### Requests:
...
Header: 
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjMyZDExZTZhODYyYzg2YjEwYTcxYzIzIiwicm9sZSI6InVzZXIiLCJ1c2VybmFtZSI6InVzZXIiLCJlbWFpbCI6InVzZXJAbWFpbC5jb20iLCJpYXQiOjE2NjM4OTgxMTYsImV4cCI6MTY2NDUwMjkxNn0.1-agLO6xtH2JXR7U9v6f4WxmIhWbppzxXe_wMHX0kNQ
...
###### Response:
...
[
    {
        "_id": "632d07690ab9717f5f540ed1",
        "courseName": "Basics of Engg",
        "subjects": [
            "Maths",
            "Physics",
            "English"
        ],
        "type": "Basic",
        "lastModifiedUserId": "632cfb54079f6b62ba8f6995",
        "createdAt": "2022-09-23T01:10:01.497Z",
        "updatedAt": "2022-09-23T01:10:01.497Z",
        "__v": 0
    },
    {
        "_id": "632d1334a862c86b10a71c2e",
        "courseName": "Basics of Engg1",
        "subjects": [
            "Maths, Physics, English"
        ],
        "type": "Basic",
        "lastModifiedUserId": "632cfb54079f6b62ba8f6995",
        "createdAt": "2022-09-23T02:00:20.064Z",
        "updatedAt": "2022-09-23T02:00:20.064Z",
        "__v": 0
    }
]
...

## List Trainings filter by stream API
...
URL: http://localhost:3000/trainings?page=1&limit=5&sort=asc&filterBy=stream&filterValue=det
...
###### Requests:
...
Header: 
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjMyZDExZTZhODYyYzg2YjEwYTcxYzIzIiwicm9sZSI6InVzZXIiLCJ1c2VybmFtZSI6InVzZXIiLCJlbWFpbCI6InVzZXJAbWFpbC5jb20iLCJpYXQiOjE2NjM4OTgxMTYsImV4cCI6MTY2NDUwMjkxNn0.1-agLO6xtH2JXR7U9v6f4WxmIhWbppzxXe_wMHX0kNQ
...
###### Response:
...
[
    {
        "_id": "632d07690ab9717f5f540ed1",
        "courseName": "Basics of Engg",
        "subjects": [
            "Maths",
            "Physics",
            "English"
        ],
        "type": "Basic",
        "lastModifiedUserId": "632cfb54079f6b62ba8f6995",
        "createdAt": "2022-09-23T01:10:01.497Z",
        "updatedAt": "2022-09-23T01:10:01.497Z",
        "__v": 0,
        "subj": [
            {
                "_id": "632d01c27e421efa4dc66576",
                "subject": "Maths",
                "stream": "Science",
                "lastModifiedUserId": "632cfb54079f6b62ba8f6995",
                "createdAt": "2022-09-23T00:45:54.747Z",
                "updatedAt": "2022-09-23T00:45:54.748Z",
                "__v": 0
            },
            {
                "_id": "632d07150ab9717f5f540ebf",
                "subject": "English",
                "stream": "Arts",
                "lastModifiedUserId": "632cfb54079f6b62ba8f6995",
                "createdAt": "2022-09-23T01:08:37.855Z",
                "updatedAt": "2022-09-23T01:08:37.855Z",
                "__v": 0
            },
            {
                "_id": "632d071c0ab9717f5f540ec2",
                "subject": "Physics",
                "stream": "Science",
                "lastModifiedUserId": "632cfb54079f6b62ba8f6995",
                "createdAt": "2022-09-23T01:08:44.939Z",
                "updatedAt": "2022-09-23T01:08:44.939Z",
                "__v": 0
            }
        ]
    },
    {
        "_id": "632d078e0ab9717f5f540ed4",
        "courseName": "CA Fundamentals",
        "subjects": [
            "English",
            "Economics",
            "Finance"
        ],
        "type": "Basic",
        "lastModifiedUserId": "632cfb54079f6b62ba8f6995",
        "createdAt": "2022-09-23T01:10:38.057Z",
        "updatedAt": "2022-09-23T01:10:38.057Z",
        "__v": 0,
        "subj": [
            {
                "_id": "632d07150ab9717f5f540ebf",
                "subject": "English",
                "stream": "Arts",
                "lastModifiedUserId": "632cfb54079f6b62ba8f6995",
                "createdAt": "2022-09-23T01:08:37.855Z",
                "updatedAt": "2022-09-23T01:08:37.855Z",
                "__v": 0
            },
            {
                "_id": "632d07220ab9717f5f540ec5",
                "subject": "Economics",
                "stream": "Commerce",
                "lastModifiedUserId": "632cfb54079f6b62ba8f6995",
                "createdAt": "2022-09-23T01:08:50.827Z",
                "updatedAt": "2022-09-23T01:08:50.827Z",
                "__v": 0
            },
            {
                "_id": "632d072d0ab9717f5f540ecb",
                "subject": "Finance",
                "stream": "Commerce",
                "lastModifiedUserId": "632cfb54079f6b62ba8f6995",
                "createdAt": "2022-09-23T01:09:01.106Z",
                "updatedAt": "2022-09-23T01:09:01.106Z",
                "__v": 0
            },
            {
                "_id": "632d12d1a862c86b10a71c29",
                "subject": "Finance",
                "stream": "Commerce",
                "lastModifiedUserId": "632cfb54079f6b62ba8f6995",
                "createdAt": "2022-09-23T01:58:41.994Z",
                "updatedAt": "2022-09-23T01:58:41.994Z",
                "__v": 0
            }
        ]
    },
    {
        "_id": "632d079f0ab9717f5f540ed7",
        "courseName": "International arts",
        "subjects": [
            "English",
            "Social Science",
            "Finance"
        ],
        "type": "Detailed",
        "lastModifiedUserId": "632cfb54079f6b62ba8f6995",
        "createdAt": "2022-09-23T01:10:55.882Z",
        "updatedAt": "2022-09-23T01:10:55.882Z",
        "__v": 0,
        "subj": [
            {
                "_id": "632d07150ab9717f5f540ebf",
                "subject": "English",
                "stream": "Arts",
                "lastModifiedUserId": "632cfb54079f6b62ba8f6995",
                "createdAt": "2022-09-23T01:08:37.855Z",
                "updatedAt": "2022-09-23T01:08:37.855Z",
                "__v": 0
            },
            {
                "_id": "632d07280ab9717f5f540ec8",
                "subject": "Social Science",
                "stream": "Arts",
                "lastModifiedUserId": "632cfb54079f6b62ba8f6995",
                "createdAt": "2022-09-23T01:08:56.372Z",
                "updatedAt": "2022-09-23T01:08:56.372Z",
                "__v": 0
            },
            {
                "_id": "632d072d0ab9717f5f540ecb",
                "subject": "Finance",
                "stream": "Commerce",
                "lastModifiedUserId": "632cfb54079f6b62ba8f6995",
                "createdAt": "2022-09-23T01:09:01.106Z",
                "updatedAt": "2022-09-23T01:09:01.106Z",
                "__v": 0
            },
            {
                "_id": "632d12d1a862c86b10a71c29",
                "subject": "Finance",
                "stream": "Commerce",
                "lastModifiedUserId": "632cfb54079f6b62ba8f6995",
                "createdAt": "2022-09-23T01:58:41.994Z",
                "updatedAt": "2022-09-23T01:58:41.994Z",
                "__v": 0
            }
        ]
    },
    {
        "_id": "632d1334a862c86b10a71c2e",
        "courseName": "Basics of Engg1",
        "subjects": [
            "Maths, Physics, English"
        ],
        "type": "Basic",
        "lastModifiedUserId": "632cfb54079f6b62ba8f6995",
        "createdAt": "2022-09-23T02:00:20.064Z",
        "updatedAt": "2022-09-23T02:00:20.064Z",
        "__v": 0,
        "subj": []
    }
]
...

## List Trainings filter by type API
...
URL: http://localhost:3000/trainings?page=1&limit=2&sort=asc&filterBy=typefilterValue=det
...
###### Requests:
...
Header: 
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjMyZDExZTZhODYyYzg2YjEwYTcxYzIzIiwicm9sZSI6InVzZXIiLCJ1c2VybmFtZSI6InVzZXIiLCJlbWFpbCI6InVzZXJAbWFpbC5jb20iLCJpYXQiOjE2NjM4OTgxMTYsImV4cCI6MTY2NDUwMjkxNn0.1-agLO6xtH2JXR7U9v6f4WxmIhWbppzxXe_wMHX0kNQ
...
###### Response:
...
[
    {
        "_id": "632d07690ab9717f5f540ed1",
        "courseName": "Basics of Engg",
        "subjects": [
            "Maths",
            "Physics",
            "English"
        ],
        "type": "Basic",
        "lastModifiedUserId": "632cfb54079f6b62ba8f6995",
        "createdAt": "2022-09-23T01:10:01.497Z",
        "updatedAt": "2022-09-23T01:10:01.497Z",
        "__v": 0
    },
    {
        "_id": "632d078e0ab9717f5f540ed4",
        "courseName": "CA Fundamentals",
        "subjects": [
            "English",
            "Economics",
            "Finance"
        ],
        "type": "Basic",
        "lastModifiedUserId": "632cfb54079f6b62ba8f6995",
        "createdAt": "2022-09-23T01:10:38.057Z",
        "updatedAt": "2022-09-23T01:10:38.057Z",
        "__v": 0
    }
]
...