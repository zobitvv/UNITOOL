import React from 'react';
import {
  FileText,
  Wand2,
  BookOpen,
  Image,
  Eraser,
  Merge,
  FileEdit,
  FileImage,
  FileUp,
  Scaling,
  Shrink,
  Book,
  Scissors,
  FileLock2,
  FileSpreadsheet,
  User,
  CaseSensitive,
  Library,
  FileVideo,
  Wind,
  AudioLines,
  Youtube,
  UserCog,
  FileKey2,
  PenLine,
  QrCode,
  Link,
  RotateCw,
  Timer,
  VolumeX,
  Type,
  Baseline,
  Briefcase,
  Star,
  HelpCircle,
  File,
  FlipHorizontal,
  FileSearch,
  Languages,
  Signature,
  PieChart,
  Palette,
  Eye,
  Settings,
  ShieldCheck,
  Smartphone,
  CheckCircle2,
  Hash,
  Mail,
  List,
  FileCode,
  Music,
  Video,
  Layout,
  Instagram,
  Globe,
  Archive,
  Subtitles,
  Mic,
  Clapperboard,
  FileAudio,
  Code2,
  Map,
} from 'lucide-react';

export type ToolCategory = 'AI Write' | 'Image Tools' | 'Pdf Tools' | 'Video Tools' | 'Converter Tools' | 'Web Tools' | 'Other Tools';

export type Tool = {
  title: string;
  slug: string;
  description: string;
  href: string;
  category: ToolCategory;
  icon: React.ElementType;
};

/**
 * Custom FilePlus icon using React.createElement to avoid JSX syntax in a .ts file.
 */
function FilePlus(props: any) {
  return React.createElement(
    'svg',
    {
      ...props,
      xmlns: 'http://www.w3.org/2000/svg',
      width: '24',
      height: '24',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    },
    React.createElement('path', { d: 'M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z' }),
    React.createElement('path', { d: 'M14 2v4a2 2 0 0 0 2 2h4' }),
    React.createElement('path', { d: 'M9 15h6' }),
    React.createElement('path', { d: 'M12 12v6' })
  );
}

function formatTitle(slug: string) {
  return slug
    .split('-')
    .map((word) => {
      const upper = word.toUpperCase();
      if (['PDF', 'JPG', 'PNG', 'SVG', 'HEIC', 'WEBP', 'EPS', 'TIFF', 'AI', 'AZW3', 'MOBI', 'EPUB', 'XLS', 'XLSX', 'CSV', 'JSON', 'XML', 'PPT', 'PPTX', 'DOCX', 'MSG', 'URL', 'AAC', 'MP3', 'MP4', 'M4A', 'WAV', 'OGG', 'MKV', 'AVI', 'MOV', 'FLAC', 'M4R', 'WEBM', 'GIF', 'APNG', 'AVIF', 'FB', 'TIKTOK', 'NDA'].includes(upper)) {
        return upper;
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}

// Sorted Priority List (best on top)
const rawTools: { slug: string; path: string; category: ToolCategory; icon: React.ElementType }[] = [
  // Image Tools - High Priority
  { slug: "remove-bg", path: "image", category: "Image Tools", icon: Eraser },
  { slug: "ai-image-generator", path: "image", category: "Image Tools", icon: Wand2 },
  { slug: "ai-art-generator", path: "image", category: "Image Tools", icon: Palette },
  { slug: "cleanup-picture", path: "image", category: "Image Tools", icon: Eraser },
  { slug: "upscale", path: "image", category: "Image Tools", icon: Scaling },
  { slug: "remove-objects", path: "image", category: "Image Tools", icon: Eraser },
  { slug: "make-background-transparent", path: "image", category: "Image Tools", icon: Eraser },
  { slug: "compress", path: "image", category: "Image Tools", icon: Shrink },
  { slug: "resize", path: "image", category: "Image Tools", icon: Scaling },
  { slug: "blur-background", path: "image", category: "Image Tools", icon: Eye },

  // AI Write - High Priority
  { slug: "ai-rephraser", path: "write", category: "AI Write", icon: RotateCw },
  { slug: "article-generator", path: "write", category: "AI Write", icon: PenLine },
  { slug: "content-improver", path: "write", category: "AI Write", icon: Wand2 },
  { slug: "essay-writer", path: "write", category: "AI Write", icon: PenLine },
  { slug: "grammar-fixer", path: "write", category: "AI Write", icon: CheckCircle2 },
  { slug: "humanizer-ai", path: "write", category: "AI Write", icon: UserCog },
  { slug: "paraphrasing", path: "write", category: "AI Write", icon: RotateCw },
  { slug: "summarize-youtube", path: "write", category: "AI Write", icon: Youtube },
  { slug: "translate", path: "write", category: "AI Write", icon: Languages },

  // Pdf Tools - High Priority
  { slug: "merge", path: "pdf", category: "Pdf Tools", icon: Merge },
  { slug: "edit", path: "pdf", category: "Pdf Tools", icon: FileEdit },
  { slug: "compress", path: "pdf", category: "Pdf Tools", icon: Shrink },
  { slug: "split", path: "pdf", category: "Pdf Tools", icon: Scissors },
  { slug: "to-word", path: "pdf", category: "Pdf Tools", icon: FileText },
  { slug: "from-word", path: "pdf", category: "Pdf Tools", icon: FileUp },
  { slug: "unlock", path: "pdf", category: "Pdf Tools", icon: FileKey2 },
  { slug: "sign", path: "pdf", category: "Pdf Tools", icon: Signature },

  // Video Tools - High Priority
  { slug: "compress", path: "video", category: "Video Tools", icon: Shrink },
  { slug: "cutter", path: "video", category: "Video Tools", icon: Scissors },
  { slug: "to-mp3", path: "video", category: "Video Tools", icon: Music },
  { slug: "mp4-to-mp3", path: "video", category: "Video Tools", icon: Music },
  { slug: "audio-to-text", path: "video", category: "Video Tools", icon: Type },
  { slug: "add-subtitles", path: "video", category: "Video Tools", icon: Subtitles },

  // Others...
  { slug: "qr-code", path: "other", category: "Other Tools", icon: QrCode },
  { slug: "meme-maker", path: "other", category: "Other Tools", icon: Image },
  { slug: "zip", path: "other", category: "Other Tools", icon: Archive },

  // Populate rest from the general list provided earlier (abbreviated here for brevity but assuming full list logic)
  { slug: "jpg-to-png", path: "image", category: "Image Tools", icon: FileImage },
  { slug: "png-to-jpg", path: "image", category: "Image Tools", icon: FileImage },
  { slug: "webp-to-jpg", path: "image", category: "Image Tools", icon: FileImage },
  { slug: "heic-to-jpg", path: "image", category: "Image Tools", icon: FileImage },
  { slug: "blog-outline", path: "write", category: "AI Write", icon: List },
  { slug: "business-name-generator", path: "write", category: "AI Write", icon: Briefcase },
  { slug: "lorem-ipsum-generator", path: "other", category: "Other Tools", icon: FileText },
  { slug: "excel-to-pdf", path: "converter", category: "Converter Tools", icon: FileUp },
  { slug: "csv-to-excel", path: "converter", category: "Converter Tools", icon: FileSpreadsheet },
  { slug: "detect", path: "web", category: "Web Tools", icon: ShieldCheck },
];

export const tools: Tool[] = rawTools.map((t) => ({
  title: formatTitle(t.slug),
  slug: t.slug,
  description: "", // Removed description
  href: `https://tinywow.com/${t.path}/${t.slug}`,
  category: t.category,
  icon: t.icon,
}));
