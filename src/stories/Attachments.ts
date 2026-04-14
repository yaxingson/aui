import { html } from 'lit'
import type { FilesCardProps } from './FileCard'

interface PlaceholderType {
  icon?:string
  title?:string
  description?:string
}

export interface AttachmentsProps {
  items: FilesCardProps[]
  overflow: 'scrollX' | 'scrollY' | 'wrap'
  limit:number
  drag: boolean
  dragTarget: string | HTMLElement
  beforeUpload: (file:File) => boolean
  placeholder: PlaceholderType | ((type:'inline'|'drop') => PlaceholderType)

}

export function Attachments() {
  return html`
  <div></div>
  `
}

