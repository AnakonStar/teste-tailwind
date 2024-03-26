export const PostSchema = {
  name: 'Posts',
  primaryKey: 'id',
  properties: {
    id: { type: 'int', indexed: true },
    user: 'string',
    description: 'string',
    title: 'string',
  },
};
