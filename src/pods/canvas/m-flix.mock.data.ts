import { DatabaseSchemaVm } from '@/core/providers';

export const mFlix: DatabaseSchemaVm = {
  version: '0.1',
  tables: [
    {
      id: 'dca791c6-e664-4e38-94c2-0f7bdd5c544f',
      tableName: 'movies',
      fields: [
        {
          id: '8db45b56-bc1a-4c1e-9d1c-349e12fd9491',
          PK: true,
          name: '_id',
          type: 'objectId',
          children: [],
        },
        {
          id: '5ba8bd88-645e-4010-9cfd-909f348a8f8b',
          PK: false,
          name: 'title',
          type: 'string',
          children: [],
        },
        {
          id: '52dc5788-81b5-4711-a593-05a928c7f516',
          PK: false,
          name: 'year',
          type: 'int',
          children: [],
        },
        {
          id: 'd20a3b35-f680-4237-ad88-a0814464a6d3',
          PK: false,
          name: 'released',
          type: 'date',
          children: [],
        },
        {
          id: '82a3718b-64ca-4b2b-abe0-92c77e0e13ef',
          PK: false,
          name: 'poster',
          type: 'string',
          children: [],
        },
        {
          id: '82b9b4d3-099f-40b1-8db3-caaa50080492',
          PK: false,
          name: 'plot',
          type: 'string',
          children: [],
        },
        {
          id: '117199c2-7f72-45d3-993b-ba51d67befab',
          PK: false,
          name: 'fullplot',
          type: 'string',
          children: [],
        },
        {
          id: '64f68b3d-58cc-4e89-9a8c-d784a69cdd2d',
          PK: false,
          name: 'lastupdated',
          type: 'date',
          children: [],
        },
        {
          id: '960af592-4a9b-4cff-b936-635f56462b14',
          PK: false,
          name: 'type',
          type: 'string',
          children: [],
        },
        {
          id: 'c4f0f730-a991-4b79-9a2b-3c1e6e9f7d2b',
          PK: false,
          name: 'directors',
          type: 'string',
          isArray: true,
          children: [],
        },
        {
          id: '3e5afa47-d6b6-4a7f-b651-f08698bb19a4',
          PK: false,
          name: 'imdb',
          type: 'object',
          children: [
            {
              id: '1f3254bc-d18b-46d2-ab91-76e5a979fd91',
              PK: false,
              name: 'rating',
              type: 'double',
              children: [],
            },
            {
              id: 'dc5655ea-246a-41e1-a085-80ed7b37222b',
              PK: false,
              name: 'votes',
              type: 'int',
              children: [],
            },
            {
              id: 'd05d91d1-6ed0-45c6-a514-21bee3457d1f',
              PK: false,
              name: 'id',
              type: 'int',
              children: [],
            },
          ],
        },
        {
          id: 'c0cb3abe-1277-4eae-84c0-62e02d8da4d9',
          PK: false,
          name: 'cast',
          type: 'string',
          isArray: true,
          children: [],
        },
        {
          id: 'a57d8e06-a433-4201-b2f8-6ed6e2fce9bc',
          PK: false,
          name: 'countries',
          type: 'string',
          isArray: true,
          children: [],
        },
        {
          id: '45ce542a-2903-4e4b-b125-8da43c77003e',
          PK: false,
          name: 'genres',
          type: 'string',
          isArray: true,
          children: [],
        },
        {
          id: '9d9f0028-4ea0-4de6-92c0-7e8b8e0fc8cf',
          PK: false,
          name: 'tomatoes',
          type: 'object',
          children: [
            {
              id: '3b43ece4-a1a3-4498-8050-3e7207fef324',
              PK: false,
              name: 'viewer',
              type: 'object',
              children: [
                {
                  id: '0617d445-921a-419e-bf36-7b9d724b7ac4',
                  PK: false,
                  name: 'rating',
                  type: 'double',
                  children: [],
                },
                {
                  id: '8b1215d5-1391-4997-916b-7a3c7ec39c02',
                  PK: false,
                  name: 'numReviews',
                  type: 'int',
                  children: [],
                },
              ],
            },
            {
              id: '1fb395b0-779f-4914-b875-2060fd96647d',
              PK: false,
              name: 'lastUpdated',
              type: 'date',
              children: [],
            },
          ],
        },
        {
          id: 'dab12510-8f5c-4d42-af4f-85da5e9fefc8',
          PK: false,
          name: 'num_mflix_comments',
          type: 'int',
          children: [],
        },
      ],
      x: 878,
      y: 58,
    },
    {
      id: '60707815-9491-4a71-8ba9-995400f77f0b',
      tableName: 'comments',
      fields: [
        {
          id: '7ad8203d-9049-4702-a3d1-ae8a5dcb1359',
          PK: true,
          name: '_id',
          type: 'objectId',
          children: [],
        },
        {
          id: '59ce3408-3816-4ad1-badb-15f633d93fd4',
          PK: false,
          name: 'name',
          type: 'string',
          children: [],
        },
        {
          id: '372b43e5-26bd-4221-b5cb-de3e4847aad4',
          PK: false,
          name: 'email',
          type: 'string',
          children: [],
        },
        {
          id: 'cb6ef1fd-c220-4eb4-8b34-20734629602d',
          PK: false,
          name: 'movie_id',
          type: 'objectId',
          children: [],
        },
        {
          id: '4b3bf278-661c-4e7b-99c2-c798b0c08847',
          PK: false,
          name: 'text',
          type: 'string',
          children: [],
        },
        {
          id: '41254064-dff4-4031-86dc-474329c6436d',
          PK: false,
          name: 'date',
          type: 'date',
          children: [],
        },
      ],
      x: 1288,
      y: 51,
    },
    {
      id: 'bbcfdf39-dd92-4772-9264-10f40bdcc0b0',
      tableName: 'theaters',
      fields: [
        {
          id: '0f9a8fb6-6d8a-4b2e-b76f-0c01aa52a39e',
          PK: true,
          name: '_id',
          type: 'objectId',
          children: [],
        },
        {
          id: '19ce3446-75a0-467a-96d5-d1c379341b78',
          PK: false,
          name: 'teatherId',
          type: 'int',
          children: [],
        },
        {
          id: '4a81a19e-2371-4b88-baed-3adbc1a132fb',
          PK: false,
          name: 'location',
          type: 'object',
          children: [
            {
              id: 'c478a265-7906-42be-8c3c-7d689aae2488',
              PK: false,
              name: 'address',
              type: 'object',
              children: [
                {
                  id: '528c2f5e-7e39-4d9c-a763-766e3ba2bc87',
                  PK: false,
                  name: 'street1',
                  type: 'string',
                  children: [],
                },
                {
                  id: 'a9347a87-45dc-4c7c-9a21-1cf7c9b92d4e',
                  PK: false,
                  name: 'city',
                  type: 'string',
                  children: [],
                },
                {
                  id: '3ea47ddc-4e0a-4a03-a68d-838a868c3177',
                  PK: false,
                  name: 'state',
                  type: 'string',
                  children: [],
                },
                {
                  id: '01fbd690-f580-4168-9480-df085ce2b6f8',
                  PK: false,
                  name: 'zipcode',
                  type: 'string',
                  children: [],
                },
              ],
            },
            {
              id: 'e699e066-20cc-489c-b878-8f08d88f0657',
              PK: false,
              name: 'geo',
              type: 'long',
              isArray: true,
              children: [],
            },
          ],
        },
      ],
      x: 1297,
      y: 369,
    },
    {
      id: '4d88b10a-d79f-4889-af2b-103946262e39',
      tableName: 'sessions',
      fields: [
        {
          id: 'd2893abe-2a88-4dfb-975d-6858a77a24f5',
          PK: true,
          name: '_id',
          type: 'objectId',
          children: [],
        },
        {
          id: 'ed2b1a46-ffb2-4a4e-9c93-20fd77767686',
          PK: false,
          name: 'user_id',
          type: 'objectId',
          children: [],
        },
        {
          id: '87e66ac3-f053-4ee9-aef5-d9bedad3bf5d',
          PK: false,
          name: 'jwt',
          type: 'string',
          children: [],
        },
      ],
      x: 472,
      y: 60,
    },
    {
      id: '3501a79e-609b-45df-90e8-cac628076fbd',
      tableName: 'users',
      fields: [
        {
          id: '2c570d0f-eb44-43ae-b493-c2ce2d55d394',
          PK: true,
          name: '_id',
          type: 'objectId',
          children: [],
        },
        {
          id: '29a88f0a-e452-43ee-81d0-7617f12f999a',
          PK: false,
          name: 'name',
          type: 'string',
          children: [],
        },
        {
          id: '0d2ceb16-882e-4fcd-9194-f5d8ffe5cf64',
          PK: false,
          name: 'email',
          type: 'string',
          children: [],
        },
        {
          id: '641ef026-a130-4a80-a5d4-09a3f98322bf',
          PK: false,
          name: 'password',
          type: 'string',
          children: [],
        },
      ],
      x: 40,
      y: 48,
    },
    {
      id: '4c6b9f3e-7cc6-463b-ad68-aafc89f38175',
      tableName: 'embedded_movies',
      fields: [
        {
          id: 'd1f465aa-2dd0-4911-b987-d29cbcd2e7c4',
          PK: true,
          name: '_id',
          type: 'objectId',
          children: [],
        },
        {
          id: 'c9cc1f4b-fcab-414b-ad97-a6e48b79b785',
          PK: false,
          name: 'plot',
          type: 'string',
          children: [],
        },
        {
          id: '211417bc-a649-4aca-882c-6519bff7fad2',
          PK: false,
          name: 'genres',
          type: 'string',
          isArray: true,
          children: [],
        },
        {
          id: '944d82eb-02b1-431b-b1f3-d4013f5c378f',
          PK: false,
          name: 'runtime',
          type: 'int',
          children: [],
        },
        {
          id: 'f4f68a0d-b8d3-47c5-b989-55f0abc28ff1',
          PK: false,
          name: 'cast',
          type: 'string',
          isArray: true,
          children: [],
        },
        {
          id: 'edc8cb2d-872d-400e-b80e-5611f3f6f157',
          PK: false,
          name: 'num_mflix_comments',
          type: 'int',
          children: [],
        },
        {
          id: 'be446a24-9adb-4337-b84e-35fed2397322',
          PK: false,
          name: 'poster',
          type: 'string',
          children: [],
        },
        {
          id: '7986672d-3811-41e1-a41c-5244c2469499',
          PK: false,
          name: 'title',
          type: 'string',
          children: [],
        },
        {
          id: 'b96d3772-a164-4e53-b674-c2290aa21825',
          PK: false,
          name: 'lastUpdated',
          type: 'date',
          children: [],
        },
        {
          id: 'f185c166-fb8a-42fc-9a7a-7a7521acc408',
          PK: false,
          name: 'languages',
          type: 'string',
          isArray: true,
          children: [],
        },
        {
          id: '3c3a39fb-fafb-451b-8252-0999777c1b8f',
          PK: false,
          name: 'released',
          type: 'date',
          children: [],
        },
        {
          id: '7aefb8ff-5454-462b-b774-2bd91a4ad334',
          PK: false,
          name: 'directors',
          type: 'string',
          isArray: true,
          children: [],
        },
        {
          id: '806acded-9ad4-418d-bc42-001a43d4393c',
          PK: false,
          name: 'writers',
          type: 'string',
          isArray: true,
          children: [],
        },
        {
          id: '76e128b4-10b3-4a48-9fb5-6dee55618c2e',
          PK: false,
          name: 'awards',
          type: 'object',
          children: [
            {
              id: '52846e2c-4b5e-42b1-9b65-f2c6a2b37b62',
              PK: false,
              name: 'wins',
              type: 'int',
              children: [],
            },
            {
              id: '45678e57-6788-4aa3-b1ad-2c28a7ef401b',
              PK: false,
              name: 'nominations',
              type: 'int',
              children: [],
            },
            {
              id: 'cf7eeb91-9daf-4e81-87e4-c9c20783f303',
              PK: false,
              name: 'text',
              type: 'string',
              children: [],
            },
          ],
        },
        {
          id: '52a5d381-11dc-4f33-947f-85d2f3e396b6',
          PK: false,
          name: 'year',
          type: 'int',
          children: [],
        },
        {
          id: 'eb773767-4deb-4a23-a152-5d85853566e5',
          PK: false,
          name: 'imdb',
          type: 'object',
          children: [
            {
              id: '4fe8d34e-4947-4c9d-a26b-5776caaa3592',
              PK: false,
              name: 'rating',
              type: 'double',
              children: [],
            },
            {
              id: 'ffcbb0f7-4f36-4bbe-b6f6-ae6a84a3e453',
              PK: false,
              name: 'votes',
              type: 'int',
              children: [],
            },
            {
              id: '39b2edf0-fa60-44d8-8342-24ecd156da45',
              PK: false,
              name: 'id',
              type: 'int',
              children: [],
            },
          ],
        },
        {
          id: '374b367f-b4f4-4f2d-8b64-41fd4ab16ad5',
          PK: false,
          name: 'countries',
          type: 'string',
          isArray: true,
          children: [],
        },
        {
          id: 'eddd3f09-01b5-401c-87d1-991ffe024efa',
          PK: false,
          name: 'type',
          type: 'string',
          children: [],
        },
        {
          id: '542cd7e1-def3-49e9-a55e-1c49431992cd',
          PK: false,
          name: 'tomatoes',
          type: 'object',
          children: [
            {
              id: 'ef9113c7-0f69-4f68-afe0-32f34ef8abb2',
              PK: false,
              name: 'viewer',
              type: 'object',
              children: [
                {
                  id: 'dbedc40f-7937-4754-b76b-dfc21f6adb07',
                  PK: false,
                  name: 'rating',
                  type: 'double',
                  children: [],
                },
                {
                  id: 'af1b9638-d8f3-44f8-81bd-009815d1da67',
                  PK: false,
                  name: 'numReviews',
                  type: 'int',
                  children: [],
                },
                {
                  id: 'd792fb33-8294-4f41-aef3-76bfb0c4b4ee',
                  PK: false,
                  name: 'meter',
                  type: 'int',
                  children: [],
                },
              ],
            },
            {
              id: '2d387333-fab1-4552-a361-40227ab34078',
              PK: false,
              name: 'dvd',
              type: 'date',
              children: [],
            },
            {
              id: '721a9af1-3751-4786-b04e-f847437d8c7b',
              PK: false,
              name: 'critic',
              type: 'object',
              children: [
                {
                  id: '2c5d4397-7b7e-4724-ba7d-ac5cd24cc326',
                  PK: false,
                  name: 'rating',
                  type: 'double',
                  children: [],
                },
                {
                  id: '4a009a02-e3bc-4c5a-82b2-6411bb455cde',
                  PK: false,
                  name: 'numReviews',
                  type: 'int',
                  children: [],
                },
                {
                  id: 'a3f01cdf-1326-42e9-bf37-bf1c21fdd67a',
                  PK: false,
                  name: 'meter',
                  type: 'int',
                  children: [],
                },
                {
                  id: 'c722f904-f0a7-4847-8811-4d6545b257ba',
                  PK: false,
                  name: 'production',
                  type: 'string',
                  children: [],
                },
                {
                  id: '8682d574-e402-4f2a-9b67-2ed20b34b6c7',
                  PK: false,
                  name: 'fresh',
                  type: 'int',
                  children: [],
                },
              ],
            },
          ],
        },
        {
          id: '1b5ed881-5604-4777-bed4-4cd4a441fcdb',
          PK: false,
          name: 'plot_embedding',
          type: 'double',
          isArray: true,
          children: [],
        },
      ],
      x: 468,
      y: 243,
    },
  ],
  relations: [
    {
      id: '9ae64eab-3a1e-414a-b623-dc57f5f347e8',
      type: '1:M',
      fromTableId: 'dca791c6-e664-4e38-94c2-0f7bdd5c544f',
      fromFieldId: '8db45b56-bc1a-4c1e-9d1c-349e12fd9491',
      toFieldId: 'cb6ef1fd-c220-4eb4-8b34-20734629602d',
      toTableId: '60707815-9491-4a71-8ba9-995400f77f0b',
    },
    {
      id: 'd5732725-c6c6-41cb-ba2c-1f0a3f407d65',
      type: '1:M',
      fromTableId: '3501a79e-609b-45df-90e8-cac628076fbd',
      fromFieldId: '2c570d0f-eb44-43ae-b493-c2ce2d55d394',
      toFieldId: 'ed2b1a46-ffb2-4a4e-9c93-20fd77767686',
      toTableId: '4d88b10a-d79f-4889-af2b-103946262e39',
    },
  ],
  selectedElementId: '4c6b9f3e-7cc6-463b-ad68-aafc89f38175',
};
