import siteConfigData from '../../data/site-config.json';

export type LogoTextStyle = 'plain' | 'bordered' | 'pill' | 'underline-hover' | 'gradient' | 'spaced-caps';

export interface SiteConfig {
  branding: {
    badge?: string;
    site: {
      name: string;
      tagline?: string;
      description?: string;
      url: string;
      language?: string;
      favicon_url?: string;
    };
    logo: {
      type: 'text' | 'image' | 'image+text';
      text?: string;
      image_url?: string;
      /** @deprecated Use `style` instead */
      show_border?: boolean;
      style?: LogoTextStyle;
    };
    colors: {
      primary: string;
      secondary: string;
      primary_text?: string;
      background: string;
      background_secondary: string;
      text_primary: string;
      text_secondary: string;
      text_muted?: string;
      border: string;
    };
    dark_mode: {
      enabled: boolean;
      default?: 'light' | 'dark';
      toggle_position?: string;
      colors: {
        text_primary: string;
        text_secondary: string;
        text_muted?: string;
        background: string;
        background_secondary: string;
        border: string;
      };
    };
  };
  hero: {
    enabled: boolean;
    title?: string;
    subtitle?: string;
    show_on_all_pages?: boolean;
  };
  gradient?: [string, string, string];
  typography: {
    font_family?: string;
    heading_font_family?: string;
    google_fonts?: string[];
    local_fonts?: boolean;
  };
  header: {
    style?: string;
    show_search?: boolean;
    nav_links: Array<{
      label: string;
      url: string;
      /** Optional Tailwind classes for custom styling (e.g., button styles) */
      class_name?: string;
      /** Optional dropdown children for nested navigation */
      children?: Array<{
        label: string;
        url: string;
        class_name?: string;
      }>;
    }>;
    cta_button?: {
      enabled: boolean;
      label: string;
      url: string;
      style?: string;
      target?: '_self' | '_blank';
      /** Optional Tailwind classes for custom CTA styling */
      class_name?: string;
    };
  };
  footer: {
    show_logo?: boolean;
    show_tagline?: boolean;
    columns: Array<{
      title: string;
      links: Array<{
        label: string;
        url: string;
        /** Optional Tailwind classes for custom styling */
        class_name?: string;
      }>;
    }>;
    social_links?: {
      twitter?: string;
      linkedin?: string;
      facebook?: string;
      instagram?: string;
      youtube?: string;
      github?: string;
      tiktok?: string;
      bluesky?: string;
      threads?: string;
      rss?: boolean;
    };
    copyright_text?: string;
    powered_by_text?: string;
    powered_by_url?: string;
    show_powered_by?: boolean;
  };
  newsletter?: {
    enabled?: boolean;
    position?: 'footer' | 'after-content';
    code?: string;
  };
  blog: {
    section_title?: string;
    posts_per_page: number;
    show_categories?: boolean;
    show_date?: boolean;
    show_author?: boolean;
    show_excerpt?: boolean;
    show_reading_time?: boolean;
    show_table_of_contents?: boolean;
    show_related_posts?: boolean;
    pagination_style?: string;
    date_format?: string;
  };
  article: {
    show_social_share?: boolean;
    social_share_buttons?: string[];
    show_author_bio?: boolean;
    show_tags?: boolean;
  };
  seo: {
    title_separator?: string;
    default_og_image?: string;
    twitter_handle?: string;
    enable_json_ld?: boolean;
    /**
     * Override the canonical URL domain. Useful when site is hosted on
     * sites.pgndr.com but should be indexed under a custom domain.
     * Example: "https://myblog.com" - canonical URLs will use this instead of site.url
     */
    canonical_domain?: string;
    /**
     * If true, adds noindex meta tag and shows a preview banner.
     * Controlled by the project-level `preview` flag during publish.
     */
    robots_no_index?: boolean;
    /**
     * Custom text for the preview banner.
     * Defaults to "Preview Mode - This site is not indexed by search engines"
     */
    preview_banner_text?: string;
    /**
     * JSON-LD schema configuration for structured data
     */
    json_ld?: {
      /** Organization name for publisher schema (defaults to site.name) */
      organization_name?: string;
      /** Organization logo URL for publisher schema */
      organization_logo?: string;
    };
  };
  /**
   * Category pages configuration
   */
  categories?: {
    /** Enable category archive pages. Defaults to false. */
    enabled?: boolean;
    /** Show /categories/ index page. Defaults to true when enabled. */
    show_index?: boolean;
    /** URL prefix for category pages. Defaults to 'category'. */
    url_prefix?: string;
  };
  /**
   * Tag pages configuration
   */
  tags?: {
    /** Enable tag archive pages. Defaults to true. */
    enabled?: boolean;
    /** URL prefix for tag pages. Defaults to 'tag'. */
    url_prefix?: string;
  };
  /**
   * Search configuration using Pagefind
   */
  search?: {
    /** Enable client-side search. Defaults to false. */
    enabled?: boolean;
    /** Placeholder text for search input */
    placeholder?: string;
    /** Show search trigger in header. Defaults to true when enabled. */
    show_in_header?: boolean;
  };
  /**
   * robots.txt configuration
   */
  robots_txt?: {
    /** Additional rules to append after the default User-agent/Allow/Sitemap block */
    additional_rules?: string;
  };
  /**
   * llms.txt generation configuration
   */
  llms_txt?: {
    /** Enable llms.txt generation at /llms.txt. Defaults to false. */
    enabled?: boolean;
    /** Include article list in llms.txt. Defaults to true. */
    include_articles?: boolean;
    /** Maximum number of articles to list. Defaults to 50. */
    max_articles?: number;
    /** Include category list in llms.txt. Defaults to true. */
    include_categories?: boolean;
    /** Custom content to include after site header, before auto-generated sections */
    custom_content?: string;
  };
  /** Author profiles from project config. If non-empty, author pages are generated. */
  authors?: Array<{ id: string; name: string; url: string }>;
  tracking: {
    widget_code?: string;
    custom_head_code?: string;
    custom_body_code?: string;
  };
  /**
   * AICW-specific tracking configuration.
   * When enabled, injects the AICW analytics script.
   */
  aicw?: {
    /**
     * Enable/disable AICW tracking. Defaults to false.
     */
    enabled?: boolean;
    /**
     * AICW tracking ID (e.g., "abc123xyz")
     */
    tracking_id?: string;
    /**
     * Domain to track. Should match the canonical domain.
     * If not specified, will use canonical_domain or site.url.
     */
    domain?: string;
  };
  /**
   * Catalog/directory configuration. Each entry defines a browseable directory of tools/apps/services.
   * Gated by config — sites without catalogs work exactly as before.
   */
  catalogs?: CatalogConfig[];
  /**
   * Content sections configuration. Maps article subfolders to section metadata.
   * When configured, enables section index pages, nav auto-injection, and home page filtering.
   * Sites without sections config work exactly as before.
   */
  sections?: SectionConfig[];
  /**
   * Internationalization configuration.
   * When enabled, supports /<lang>/ prefixed pages and a language switcher.
   * Disabled by default. Can be overridden by project config.
   */
  i18n?: {
    /** Enable i18n features. Defaults to false. */
    enabled?: boolean;
    /** Default language code. Defaults to 'en'. */
    defaultLanguage?: string;
    /** Available languages. Only used when enabled is true. */
    languages?: Array<{ code: string; label: string }>;
  };
  /**
   * PDF features configuration.
   */
  pdf?: {
    /** Enable PDF lightbox popup on link click. Default: true */
    popup?: boolean;
    /** Show download button in lightbox popup. Default: true */
    popup_download_enabled?: boolean;
    /** Generate first-page WebP thumbnails at build time. Default: false */
    generate_thumbnail?: boolean;
    /** Skip PDFs larger than this (KB). Default: 200 */
    generate_thumbnail_max_size?: number;
  };
}

export interface SectionConfig {
  /** Must match subfolder name in src/content/articles/ */
  id: string;
  /** Display name (e.g., "Legal AI Tools") */
  label: string;
  /** URL path prefix (usually same as id), OR absolute URL (https://...) for nav-only links */
  path: string;
  /** Auto-add to header nav. Default: false */
  show_in_nav?: boolean;
  /** Show articles on home page. Default: true */
  show_on_home?: boolean;
  /** Uppercase label above grid (e.g., "LEGAL AI TOOLS") */
  section_title?: string;
  /** Meta description for section index page */
  description?: string;
  /** Override blog.posts_per_page for this section */
  posts_per_page?: number;
  /** Article display layout. 'grid' = tile cards, 'list' = horizontal rows. Default: 'grid' */
  layout?: 'grid' | 'list';
  /** Section content type. 'blog' sections appear in the homepage blog grid. Default: undefined (treated as 'blog' for backward compat) */
  section_type?: 'blog' | 'page';
  /**
   * Illustration style override for this section.
   * Can be a reference ("primary", "secondary", "tertiary") or a direct style ID.
   * If not set, falls back to primary illustration style.
   */
  illustration_style?: string;
}

export interface CatalogConfig {
  /** Matches subfolder name in src/content/catalog-items/ */
  id: string;
  /** Display name (e.g., "AI Database Tools Directory") */
  label: string;
  /** URL path (e.g., "directory") — must not conflict with other routes */
  path: string;
  /** Meta description for listing page */
  description?: string;
  /** Auto-add to header nav. Default: false */
  show_in_nav?: boolean;
  /** Items per page on listing. Default: all */
  items_per_page?: number;
}

// Default configuration
const defaultConfig: SiteConfig = {
  branding: {
    badge: '',
    site: {
      name: 'My Blog',
      tagline: 'Insights and updates',
      description: 'A blog about...',
      url: 'https://example.com',
      language: 'en',
      favicon_url: '',
    },
    logo: {
      type: 'text',
      text: 'Blog',
      style: 'plain',
    },
    colors: {
      primary: '',
      secondary: '',
      primary_text: '',
      background: '',
      background_secondary: '',
      text_primary: '',
      text_secondary: '',
      text_muted: '',
      border: '',
    },
    dark_mode: {
      enabled: true,
      default: 'dark',
      toggle_position: 'footer',
      colors: {
        text_primary: '',
        text_secondary: '',
        text_muted: '',
        background: '',
        background_secondary: '',
        border: '',
      },
    },
  },
  hero: {
    enabled: true,
    title: 'Welcome to the Blog',
    subtitle: 'Your compelling tagline goes here.',
    show_on_all_pages: false,
  },
  gradient: ['', '', ''],
  typography: {
    font_family: 'Inter, system-ui, sans-serif',
    heading_font_family: 'Inter, system-ui, sans-serif',
    google_fonts: ['Inter:wght@400;500;600;700'],
  },
  header: {
    style: 'pill',
    show_search: false,
    nav_links: [{ label: 'Home', url: '/' }],
  },
  footer: {
    show_logo: true,
    show_tagline: true,
    columns: [],
    social_links: { rss: true },
    copyright_text: '{{YEAR}} {{SITE_NAME}}',
    powered_by_text: '',
    powered_by_url: '',
    show_powered_by: false,
  },
  newsletter: {
    enabled: false,
    position: 'footer',
    code: '',
  },
  blog: {
    section_title: 'LATEST',
    posts_per_page: 9,
    show_categories: false,
    show_date: true,
    show_author: true,
    show_excerpt: true,
    show_reading_time: false,
    show_table_of_contents: true,
    show_related_posts: true,
    pagination_style: 'pages',
    date_format: 'MMM d, yyyy',
  },
  article: {
    show_social_share: true,
    social_share_buttons: ['facebook', 'linkedin', 'twitter', 'copy'],
    show_author_bio: false,
    show_tags: false,
  },
  seo: {
    title_separator: ' | ',
    enable_json_ld: true,
    robots_no_index: false,
    json_ld: {},
  },
  tracking: {},
  aicw: {
    enabled: false,
  },
  categories: {
    enabled: false,
    show_index: true,
    url_prefix: 'category',
  },
  search: {
    enabled: false,
    placeholder: 'Search articles...',
    show_in_header: true,
  },
  i18n: {
    enabled: false,
    defaultLanguage: 'en',
    languages: [],
  },
  pdf: {
    popup: true,
    popup_download_enabled: true,
    generate_thumbnail: false,
    generate_thumbnail_max_size: 200,
  },
  catalogs: [],
  robots_txt: {},
  llms_txt: {
    enabled: false,
    include_articles: true,
    max_articles: 50,
    include_categories: true,
  },
};

function deepMerge<T extends object>(target: T, source: Partial<T>): T {
  const result = { ...target } as T;
  for (const key of Object.keys(source) as (keyof T)[]) {
    const sourceValue = source[key];
    if (sourceValue && typeof sourceValue === 'object' && !Array.isArray(sourceValue)) {
      result[key] = deepMerge(result[key] as object || {}, sourceValue as object) as T[keyof T];
    } else if (sourceValue !== undefined) {
      result[key] = sourceValue as T[keyof T];
    }
  }
  return result;
}

export function getConfig(): SiteConfig {
  return deepMerge(defaultConfig, siteConfigData as Partial<SiteConfig>);
}

export function replacePlaceholders(text: string, config: SiteConfig): string {
  return text
    .replace(/\{\{YEAR\}\}/g, String(new Date().getFullYear()))
    .replace(/\{\{SITE_NAME\}\}/g, config.branding.site.name);
}

/**
 * Get default author name for articles.
 * Uses first author from config.authors if available, otherwise fallback.
 */
export function getDefaultAuthor(config: SiteConfig): string {
  if (config.authors && config.authors.length > 0) {
    return config.authors[0].name;
  }
  return `Content Team at ${config.branding.site.name}`;
}

/**
 * Slugify an author name for URL use
 */
export function authorSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

/**
 * Get the URL for an author page
 */
export function getAuthorUrl(name: string): string {
  return `/authors/${authorSlug(name)}/`;
}

/**
 * Get author by ID from site config
 */
export function getAuthorById(id: string, config: SiteConfig): { id: string; name: string; url: string } | undefined {
  return config.authors?.find(a => a.id === id);
}

/**
 * Resolve the effective logo text style with backward compatibility.
 * - If `style` is set, use it directly.
 * - If `show_border: true` (legacy), map to 'bordered'.
 * - Otherwise, default to 'plain'.
 */
export function getLogoTextStyle(config: SiteConfig): LogoTextStyle {
  if (config.branding.logo.style) return config.branding.logo.style;
  if (config.branding.logo.show_border) return 'bordered';
  return 'plain';
}
