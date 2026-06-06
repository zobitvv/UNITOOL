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
  Globe,
  Archive,
  Subtitles,
  Mic,
  Clapperboard,
  FileAudio,
  Code2,
  Map,
  History,
  Activity,
  Zap,
  Twitter,
  Instagram,
  Facebook,
  Linkedin,
  Monitor,
  Printer,
  Search,
  MessageSquare,
  Sparkles,
  RefreshCw,
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

function formatTitle(slug: string) {
  return slug
    .split('-')
    .map((word) => {
      const upper = word.toUpperCase();
      if (['PDF', 'JPG', 'PNG', 'SVG', 'HEIC', 'WEBP', 'EPS', 'TIFF', 'AI', 'AZW3', 'MOBI', 'EPUB', 'XLS', 'XLSX', 'CSV', 'JSON', 'XML', 'PPT', 'PPTX', 'DOCX', 'MSG', 'URL', 'AAC', 'MP3', 'MP4', 'M4A', 'WAV', 'OGG', 'MKV', 'AVI', 'MOV', 'FLAC', 'M4R', 'WEBM', 'GIF', 'APNG', 'AVIF', 'NDA', 'FB', 'INST'].includes(upper)) {
        return upper;
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}

// Custom Icons for missing ones or specific logic
function Presentation(props: any) {
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
    React.createElement('path', { d: 'M2 3h20' }),
    React.createElement('path', { d: 'M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3' }),
    React.createElement('path', { d: 'm7 21 5-5 5 5' })
  );
}

const rawTools: { slug: string; path: string; category: ToolCategory; icon: React.ElementType }[] = [
  // --- PRIORITY TOP TOOLS (Most Popular) ---
  { slug: "remove-bg", path: "image", category: "Image Tools", icon: Eraser },
  { slug: "ai-image-generator", path: "image", category: "Image Tools", icon: Sparkles },
  { slug: "merge", path: "pdf", category: "Pdf Tools", icon: Merge },
  { slug: "edit", path: "pdf", category: "Pdf Tools", icon: FileEdit },
  { slug: "compress", path: "pdf", category: "Pdf Tools", icon: Shrink },
  { slug: "ai-rephraser", path: "write", category: "AI Write", icon: RefreshCw },
  { slug: "grammar-fixer", path: "write", category: "AI Write", icon: CheckCircle2 },
  { slug: "summarize-youtube", path: "write", category: "AI Write", icon: Youtube },
  
  // --- IMAGE TOOLS ---
  { slug: "cleanup-picture", path: "image", category: "Image Tools", icon: Eraser },
  { slug: "upscale", path: "image", category: "Image Tools", icon: Scaling },
  { slug: "resize", path: "image", category: "Image Tools", icon: Scaling },
  { slug: "compress", path: "image", category: "Image Tools", icon: Shrink },
  { slug: "ai-art-generator", path: "image", category: "Image Tools", icon: Palette },
  { slug: "blur-background", path: "image", category: "Image Tools", icon: Eye },
  { slug: "make-background-transparent", path: "image", category: "Image Tools", icon: Eraser },
  { slug: "jpg-to-png", path: "image", category: "Image Tools", icon: FileImage },
  { slug: "png-to-jpg", path: "image", category: "Image Tools", icon: FileImage },
  { slug: "webp-to-jpg", path: "image", category: "Image Tools", icon: FileImage },
  { slug: "heic-to-jpg", path: "image", category: "Image Tools", icon: FileImage },
  { slug: "remove-objects", path: "image", category: "Image Tools", icon: Eraser },
  { slug: "crop", path: "image", category: "Image Tools", icon: Scissors },
  { slug: "chart-maker", path: "image", category: "Image Tools", icon: PieChart },
  { slug: "collage-maker", path: "image", category: "Image Tools", icon: Layout },
  { slug: "colorize-photo", path: "image", category: "Image Tools", icon: Palette },
  { slug: "combine-maker", path: "image", category: "Image Tools", icon: Merge },
  { slug: "crop-circle", path: "image", category: "Image Tools", icon: Scissors },
  { slug: "eps-to-jpg", path: "image", category: "Image Tools", icon: FileImage },
  { slug: "gif-to-jpg", path: "image", category: "Image Tools", icon: FileImage },
  { slug: "grayscale", path: "image", category: "Image Tools", icon: Palette },
  { slug: "heic-to-png", path: "image", category: "Image Tools", icon: FileImage },
  { slug: "jpg-to-svg", path: "image", category: "Image Tools", icon: FileCode },
  { slug: "metadata", path: "image", category: "Image Tools", icon: FileSearch },
  { slug: "pixelate", path: "image", category: "Image Tools", icon: Palette },
  { slug: "profile-photo", path: "image", category: "Image Tools", icon: User },
  { slug: "remove-person", path: "image", category: "Image Tools", icon: Eraser },
  { slug: "remove-text-photo", path: "image", category: "Image Tools", icon: Eraser },
  { slug: "repair-defects", path: "image", category: "Image Tools", icon: Wand2 },
  { slug: "sharpen", path: "image", category: "Image Tools", icon: Wand2 },
  { slug: "split", path: "image", category: "Image Tools", icon: Scissors },
  { slug: "translate", path: "image", category: "Image Tools", icon: Languages },

  // --- AI WRITE ---
  { slug: "translate", path: "write", category: "AI Write", icon: Languages },
  { slug: "article-generator", path: "write", category: "AI Write", icon: PenLine },
  { slug: "essay-writer", path: "write", category: "AI Write", icon: PenLine },
  { slug: "humanizer-ai", path: "write", category: "AI Write", icon: UserCog },
  { slug: "ai-detector", path: "write", category: "AI Write", icon: ShieldCheck },
  { slug: "ai-twitter-generator", path: "write", category: "AI Write", icon: Twitter },
  { slug: "article-rewriter", path: "write", category: "AI Write", icon: RotateCw },
  { slug: "blog-outline", path: "write", category: "AI Write", icon: List },
  { slug: "business-name-generator", path: "write", category: "AI Write", icon: Briefcase },
  { slug: "business-plan-generator", path: "write", category: "AI Write", icon: Briefcase },
  { slug: "business-slogan-generator", path: "write", category: "AI Write", icon: Briefcase },
  { slug: "cold-email-writer", path: "write", category: "AI Write", icon: Mail },
  { slug: "content-brief-generator", path: "write", category: "AI Write", icon: List },
  { slug: "content-improver", path: "write", category: "AI Write", icon: Wand2 },
  { slug: "content-summarizer", path: "write", category: "AI Write", icon: BookOpen },
  { slug: "explain-like-five", path: "write", category: "AI Write", icon: HelpCircle },
  { slug: "faq-generator", path: "write", category: "AI Write", icon: HelpCircle },
  { slug: "instagram-caption-generator", path: "write", category: "AI Write", icon: Instagram },
  { slug: "landing-page-copy", path: "write", category: "AI Write", icon: Layout },
  { slug: "linkedin-post-generator", path: "write", category: "AI Write", icon: Linkedin },
  { slug: "listicle-writer", path: "write", category: "AI Write", icon: List },
  { slug: "nda-generator", path: "write", category: "AI Write", icon: FileText },
  { slug: "paragraph-writer", path: "write", category: "AI Write", icon: PenLine },
  { slug: "podcast-writer", path: "write", category: "AI Write", icon: Mic },
  { slug: "press-release-generator", path: "write", category: "AI Write", icon: FileText },
  { slug: "privacy-policy-generator", path: "write", category: "AI Write", icon: ShieldCheck },
  { slug: "story-generator", path: "write", category: "AI Write", icon: Book },
  { slug: "tiktok-script-writer", path: "write", category: "AI Write", icon: Video },
  { slug: "word-counter", path: "write", category: "AI Write", icon: Hash },

  // --- PDF TOOLS ---
  { slug: "to-word", path: "pdf", category: "Pdf Tools", icon: FileText },
  { slug: "unlock", path: "pdf", category: "Pdf Tools", icon: FileKey2 },
  { slug: "sign", path: "pdf", category: "Pdf Tools", icon: Signature },
  { slug: "add-images", path: "pdf", category: "Pdf Tools", icon: Image },
  { slug: "add-pages", path: "pdf", category: "Pdf Tools", icon: FileUp },
  { slug: "add-text", path: "pdf", category: "Pdf Tools", icon: Type },
  { slug: "annotate", path: "pdf", category: "Pdf Tools", icon: PenLine },
  { slug: "crop", path: "pdf", category: "Pdf Tools", icon: Scissors },
  { slug: "extract-img", path: "pdf", category: "Pdf Tools", icon: Image },
  { slug: "extract-text", path: "pdf", category: "Pdf Tools", icon: FileText },
  { slug: "from-jpg", path: "pdf", category: "Pdf Tools", icon: FileImage },
  { slug: "from-word", path: "pdf", category: "Pdf Tools", icon: FileText },
  { slug: "protect", path: "pdf", category: "Pdf Tools", icon: FileLock2 },
  { slug: "rearrange", path: "pdf", category: "Pdf Tools", icon: List },
  { slug: "rotate", path: "pdf", category: "Pdf Tools", icon: RotateCw },
  { slug: "split", path: "pdf", category: "Pdf Tools", icon: Scissors },
  { slug: "summarizer", path: "pdf", category: "Pdf Tools", icon: BookOpen },
  { slug: "to-jpg", path: "pdf", category: "Pdf Tools", icon: FileImage },
  { slug: "to-png", path: "pdf", category: "Pdf Tools", icon: FileImage },
  { slug: "translate", path: "pdf", category: "Pdf Tools", icon: Languages },

  // --- VIDEO TOOLS ---
  { slug: "compress", path: "video", category: "Video Tools", icon: Shrink },
  { slug: "cutter", path: "video", category: "Video Tools", icon: Scissors },
  { slug: "to-mp3", path: "video", category: "Video Tools", icon: Music },
  { slug: "add-subtitles", path: "video", category: "Video Tools", icon: Subtitles },
  { slug: "audio-to-text", path: "video", category: "Video Tools", icon: Type },
  { slug: "extract-audio", path: "video", category: "Video Tools", icon: Music },
  { slug: "mute", path: "video", category: "Video Tools", icon: VolumeX },
  { slug: "to-gif", path: "video", category: "Video Tools", icon: Video },
  { slug: "youtube-to-text", path: "video", category: "Video Tools", icon: Type },
  { slug: "youtube-transcript", path: "video", category: "Video Tools", icon: FileText },

  // --- CONVERTER TOOLS ---
  { slug: "excel-to-pdf", path: "converter", category: "Converter Tools", icon: FileUp },
  { slug: "csv-to-excel", path: "converter", category: "Converter Tools", icon: FileSpreadsheet },
  { slug: "csv-to-json", path: "converter", category: "Converter Tools", icon: Code2 },
  { slug: "excel-to-csv", path: "converter", category: "Converter Tools", icon: FileSpreadsheet },
  { slug: "xml-to-json", path: "converter", category: "Converter Tools", icon: Code2 },

  // --- WEB TOOLS ---
  { slug: "detect", path: "web", category: "Web Tools", icon: ShieldCheck },
  { slug: "to-jpg", path: "web", category: "Web Tools", icon: FileImage },
  { slug: "trace", path: "web", category: "Web Tools", icon: Globe },

  // --- OTHER TOOLS ---
  { slug: "qr-code", path: "other", category: "Other Tools", icon: QrCode },
  { slug: "meme-maker", path: "other", category: "Other Tools", icon: Image },
  { slug: "zip", path: "other", category: "Other Tools", icon: Archive },
  { slug: "unix-timestamp", path: "other", category: "Other Tools", icon: Timer },
];

export const tools: Tool[] = rawTools.map((t) => ({
  title: formatTitle(t.slug),
  slug: t.slug,
  description: "",
  href: `https://tinywow.com/${t.path}/${t.slug}`,
  category: t.category,
  icon: t.icon,
}));
