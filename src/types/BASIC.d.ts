declare namespace BASIC {
  export interface IComponentDefaults {
    _uid: string;
    [k: string]: unknown;
  }

  export interface AssetStoryblok {
    _uid?: string;
    alt?: string;
    name?: string;
    filename: string;
    height?: string;
    width?: string;
    source?: string;
  }

  export interface RichtextStoryblok {
    type: string;
    content?: RichtextStoryblok[];
    marks?: RichtextStoryblok[];
    attrs?: unknown;
    text?: string;
    [k: string]: unknown;
  }

  export interface StoryProps {
    name: string;
    created_at: string;
    published_at: string;
    id: string;
    uuid: string;
    content: {
      _uid: string;
      component: string;
    };
    slug: string;
    full_slug: string;
    sort_by_date: unknown;
    position: number;
    tag_list: [];
    is_startpage: boolean;
    parent_id: number;
    meta_data: unknonwn;
    group_id: string;
    release_id: unknown;
    lang: string;
    path: null;
    first_published_at: string;
  }

  export interface LinkProps {
    id: string;
    label: string;
    href: {
      url?: string;
      cached_url?: string;
    };
    linktype: string;
    email: string;
    fieldtype: string;
  }
}