import type { SbBlokData } from '@storyblok/vue'
import { ButtonStyle, GameStatus } from './enums'

export class BlockProps {
  _uid: string = ''
  component: string = ''
}

export class StoryblokUrl extends BlockProps {
  url: string = ''
}

export class ButtonBlockProps extends BlockProps {
  display: string = ''
  style: ButtonStyle = ButtonStyle.Dark
  scrollto: string = ''
  url: StoryblokUrl = { _uid: '', component: '', url: '' }
}

export class PageBlockProps extends BlockProps {
  body: SbBlokData[] = []
}

export class PageSectionBlockProps extends BlockProps {
  id: string = ''
  display: string = ''
  body: SbBlokData[] = []
}

export class GridBlockProps extends BlockProps {
  columns: SbBlokData[] = []
  is_vertical: boolean = false
}

export class HeroBlockProps extends BlockProps {
  eyebrow: string = ''
  heading: string = ''
  supporting: string = ''
  ctas: SbBlokData[] = []
  visual: ImageData = { filename: '' }
}

export class TeaserBlockProps extends BlockProps {
  headline: string = ''
}

export class FeatureBlockProps extends BlockProps {
  name: string = ''
}

export class PreviewTileBlockProps extends BlockProps {
  reference: SbBlokData[] = []
}

class StoryblokTableCell extends BlockProps {
  value: string = ''
}

class StoryblokTableRow extends BlockProps {
  body: StoryblokTableCell[] = []
}

class StoryblokTableHead extends BlockProps {
  value: string = ''
}

class StoryblokTable {
  tbody: StoryblokTableRow[] = []
  thead: StoryblokTableHead[] = []
}

export class SummaryTableBlockProps extends BlockProps {
  table: StoryblokTable = { tbody: [], thead: [] }
}

export class GameBlockProps extends BlockProps {
  display: string = ''
  preview: ImageData = { filename: '' }
  description: string = ''
  status: GameStatus = GameStatus.InDevelopment
  genre: string = ''
  platforms: string = ''
  client: string = ''
  ctas: SbBlokData[] = []
}

class ImageData {
  filename: string = ''
}

export class ImageBlockProps extends BlockProps {
  src: ImageData = { filename: '' }
}
