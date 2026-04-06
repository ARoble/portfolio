import type { CollectionConfig } from 'payload'

export const Experiences: CollectionConfig = {
  slug: 'experiences',
  admin: {
    useAsTitle: 'company',
    defaultColumns: ['company', 'role', 'startDate', 'endDate'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'company',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'text',
      required: true,
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'startDate',
      type: 'text',
      required: true,
      admin: {
        description: 'e.g., "April 24" or "Feb 22"',
      },
    },
    {
      name: 'endDate',
      type: 'text',
      admin: {
        description: 'Leave empty if current position, e.g., "Jan 24"',
      },
    },
    {
      name: 'order',
      type: 'number',
      admin: {
        description: 'Order to display (lower numbers first)',
      },
    },
  ],
}
