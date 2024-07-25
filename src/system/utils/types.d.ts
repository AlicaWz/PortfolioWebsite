/***
 * Types.ts
 * @description Types for the project
 */
import { StoryblokStory } from "storyblok-generate-ts"

export interface IComponentDefaults {
  _uid: string
  [k: string]: any
}

export interface AssetStoryblok {
  _uid?: string
  alt?: string
  name?: string
  filename: string
  height?: string
  width?: string
  source?: string
}

export interface LinktStoryblok {
  id: string
  url: string
  linktype: string
  fieldtype: string
  cached_url: string
}

export interface RichtextStoryblok {
  type: string
  content?: RichtextStoryblok[]
  marks?: RichtextStoryblok[]
  attrs?: any
  text?: string
  [k: string]: any
}

export type MultilinkStoryblok =
  | {
      id?: string
      cached_url?: string
      anchor?: string
      linktype?: "story"
      target?: "_self" | "_blank"
      story?: {
        name: string
        created_at?: string
        published_at?: string
        id: number
        uuid: string
        content?: {
          [k: string]: any
        }
        slug: string
        full_slug: string
        sort_by_date?: null | string
        position?: number
        tag_list?: string[]
        is_startpage?: boolean
        parent_id?: null | number
        meta_data?: null | {
          [k: string]: any
        }
        group_id?: string
        first_published_at?: string
        release_id?: null | number
        lang?: string
        path?: null | string
        alternates?: any[]
        default_full_slug?: null | string
        translated_slugs?: null | any[]
        [k: string]: any
      }
      [k: string]: any
    }
  | {
      url?: string
      cached_url?: string
      anchor?: string
      linktype?: "asset" | "url"
      target?: "_self" | "_blank"
      [k: string]: any
    }
  | {
      email?: string
      linktype?: "email"
      target?: "_self" | "_blank"
      [k: string]: any
    }

export interface ConfigStoryblok extends IComponentDefaults {
  mainNavigation?: NavigationItemStoryblok[]
  footerNavigation?: NavigationItemStoryblok[]
  footerSocialMedia?: NavigationItemStoryblok[]
  globalText?: GlobalElementStoryblok[]
  globalAssets?: GlobalElementStoryblok[]
  globalLinks?: GlobalElementStoryblok[]
}

export interface GlobalElementStoryblok extends IComponentDefaults {
  title: string
  key: string
  type: "" | "global asset" | "global link" | "global text" | "global configuration"
  link?: Exclude<MultilinkStoryblok, { linktype?: "asset" }>
  asset?: AssetStoryblok
  text?: string
  component: "globalElement"
}

export interface NavigationItemStoryblok extends IComponentDefaults {
  navigationTitle: string
  pageLink?: Exclude<MultilinkStoryblok, { linktype?: "email" } | { linktype?: "asset" }>
  component: "navigationItem"
}
