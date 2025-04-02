import {type ClientSchema, a, defineData} from '@aws-amplify/backend'

const schema = a.schema({
    Recurrence: a.customType({
        once: a.boolean(),
        days: a.integer(),
        weekDay: a.integer().array(),
        monthDay: a.integer().array(),
    }),

    Lists: a.enum(['TODAY', 'BACKLOG', 'DONE']),

    DayTask: a
        .model({
            title: a
                .string()
                .required()
                .validate((v) => v.minLength(1).maxLength(100)),
            category: a
                .string()
                .required()
                .validate((v) => v.minLength(1).maxLength(20)),
            recurrence: a.ref('Recurrence').required(),
            priority: a.boolean().required(),
            list: a.ref('Lists').required(),
            time: a.time(),
            lastCompleted: a.datetime(),
            moveToTodayOn: a.datetime(),
            enablePriorityOn: a.datetime(),
            description: a.string().validate((v) => v.minLength(1).maxLength(200)),
            ordering: a.float().required(),
        })
        .authorization((allow) => [allow.owner()]),
})

export type DayTaskSchema = ClientSchema<typeof schema>

export const data = defineData({
    schema,
    authorizationModes: {
        defaultAuthorizationMode: 'userPool',
    },
})
