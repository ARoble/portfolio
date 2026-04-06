import type { CollectionConfig } from 'payload'

export const TechStacks: CollectionConfig = {
  slug: 'tech-stacks',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'icon'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'icon',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'familiar',
      type: 'checkbox',
      label: 'Familiar',
      defaultValue: false,
      admin: {
        description: 'Show on homepage as a familiar technology',
      },
    },
  ],
}
