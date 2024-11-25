import type {
  UploadField,
} from 'payload'

export interface GetImageFragmentOptions {
  name: string
  label: string
}

export function getImageFragment({ name, label }: GetImageFragmentOptions): UploadField {
  return {
    name,
    label,
    relationTo: 'media',
    required: true,
    type: 'upload',
  }
}
