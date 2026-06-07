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
  rank: number;
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

const pdfRanking = [
  "merge", "compress", "to-word", "to-jpg", "split", "from-word", "remove-watermark", "edit", "extract-text", "to-png",
  "watermark", "rearrange", "from-jpg", "to-text", "sign", "unlock", "add-text", "add-images", "rotate", "extract-img",
  "create", "delete", "crop", "annotate", "protect", "from-png", "summarizer", "to-xlsx", "to-epub", "add-pages",
  "from-url", "to-mobi", "to-csv", "from-epub", "from-mobi", "from-heic", "from-gif", "from-azw3", "from-tiff"
];

const imageRanking = [
  "remove-bg", "compress", "resize", "jpg-to-png", "png-to-jpg", "make-background-transparent", "ai-image-generator",
  "upscale", "remove-objects", "remove-watermark-photo", "ai-art-generator", "cleanup-picture", "unblur", "blur-background",
  "crop", "repair-defects", "collage-maker", "remove-text-photo", "profile-photo", "colorize-photo", "grayscale",
  "sharpen", "pixelate", "flip", "translate", "to-text", "border", "change-bg-photo", "text-to-image", "metadata",
  "split", "font-to-png", "chart-maker", "heic-to-jpg", "webp-to-jpg", "psd-to-png", "gif-to-jpg", "png-to-webp",
  "jpg-to-webp", "remove-person", "png-to-svg", "jpg-to-gif", "tiff-to-jpg", "svg-to-png", "png-to-gif", "heic-to-png",
  "webp-to-png", "eps-to-jpg", "psd-to-jpg", "tiff-to-png", "png-to-avif", "jpg-to-avif"
];

const videoRanking = [
  "compress", "mp4-to-mp3", "cutter", "extract-audio", "mp4-to-gif", "resize", "to-gif", "mute", "add-subtitles",
  "mp4-to-mov", "transcribe-podcast", "summarize-podcast", "from-tiktok", "mp4-to-webm", "audio-to-text",
  "gif-to-mp4", "mkv-to-mp4", "from-twitter", "youtube-to-text", "mp4-to-ogg"
];

const writeRanking = [
  "paraphrasing", "article-writer", "ai-rephraser", "grammar-fixer", "summarize-youtube", "content-summarizer",
  "article-rewriter", "humanizer-ai", "essay-writer", "blog-outline", "post-generator", "content-planner",
  "instagram-caption-generator", "translate", "linkedin-post-generator", "ai-twitter-generator", "post-rewriter",
  "youtube-script-writer", "cold-email-writer", "landing-page-copy", "ai-detector", "press-release-generator",
  "privacy-policy-generator", "business-plan-generator", "story-generator"
];

const otherRanking = [
  "excel-to-pdf", "qr-code", "csv-to-excel", "to-jpg", "lorem-ipsum-generator", "zip", "unix-timestamp", "meme-maker"
];

const rawTools: { slug: string; path: string; category: ToolCategory; icon: React.ElementType; description?: string }[] = [
  // PDF
  ...pdfRanking.map(slug => ({ slug, path: "pdf", category: "Pdf Tools" as const, icon: getIconForSlug(slug) })),
  // Image
  ...imageRanking.map(slug => ({ slug, path: "image", category: "Image Tools" as const, icon: getIconForSlug(slug) })),
  // Video
  ...videoRanking.map(slug => ({ slug, path: "video", category: "Video Tools" as const, icon: getIconForSlug(slug) })),
  // Write
  ...writeRanking.map(slug => ({ slug, path: "write", category: "AI Write" as const, icon: getIconForSlug(slug) })),
  // Other / Misc from ranking
  { slug: "excel-to-pdf", path: "converter", category: "Converter Tools", icon: FileText },
  { slug: "qr-code", path: "other", category: "Other Tools", icon: QrCode },
  { slug: "csv-to-excel", path: "converter", category: "Converter Tools", icon: FileSpreadsheet },
  { slug: "to-jpg", path: "web", category: "Web Tools", icon: FileImage },
  { slug: "lorem-ipsum-generator", path: "other", category: "Other Tools", icon: Type },
  { slug: "zip", path: "other", category: "Other Tools", icon: Archive },
  { slug: "unix-timestamp", path: "other", category: "Other Tools", icon: Timer },
  { slug: "meme-maker", path: "other", category: "Other Tools", icon: Image },

  // Remaining tools from sitemap to be at bottom
  { slug: "automation-wizard", path: "content-machine", category: "AI Write", icon: Zap },
  { slug: "bulk-generator", path: "content-machine", category: "AI Write", icon: Zap },
  { slug: "generate-article", path: "content-machine", category: "AI Write", icon: FileText },
  { slug: "programmatic", path: "content-machine", category: "AI Write", icon: Code2 },
  { slug: "azw3-to-epub", path: "converter", category: "Converter Tools", icon: Book },
  { slug: "azw3-to-mobi", path: "converter", category: "Converter Tools", icon: Book },
  { slug: "csv-to-json", path: "converter", category: "Converter Tools", icon: Code2 },
  { slug: "csv-to-xml", path: "converter", category: "Converter Tools", icon: FileCode },
  { slug: "epub-to-azw3", path: "converter", category: "Converter Tools", icon: Book },
  { slug: "epub-to-mobi", path: "converter", category: "Converter Tools", icon: Book },
  { slug: "excel-to-csv", path: "converter", category: "Converter Tools", icon: FileSpreadsheet },
  { slug: "excel-to-xml", path: "converter", category: "Converter Tools", icon: FileCode },
  { slug: "json-to-xml", path: "converter", category: "Converter Tools", icon: FileCode },
  { slug: "mobi-to-azw3", path: "converter", category: "Converter Tools", icon: Book },
  { slug: "mobi-to-epub", path: "converter", category: "Converter Tools", icon: Book },
  { slug: "split-csv", path: "converter", category: "Converter Tools", icon: Scissors },
  { slug: "split-excel", path: "converter", category: "Converter Tools", icon: Scissors },
  { slug: "xml-to-csv", path: "converter", category: "Converter Tools", icon: FileSpreadsheet },
  { slug: "xml-to-excel", path: "converter", category: "Converter Tools", icon: FileSpreadsheet },
  { slug: "xml-to-json", path: "converter", category: "Converter Tools", icon: Code2 },
  { slug: "aac", path: "converters", category: "Converter Tools", icon: FileAudio },
  { slug: "avi", path: "converters", category: "Converter Tools", icon: FileVideo },
  { slug: "azw3", path: "converters", category: "Converter Tools", icon: Book },
  { slug: "csv", path: "converters", category: "Converter Tools", icon: FileSpreadsheet },
  { slug: "eps", path: "converters", category: "Converter Tools", icon: FileImage },
  { slug: "epub", path: "converters", category: "Converter Tools", icon: Book },
  { slug: "gif", path: "converters", category: "Converter Tools", icon: FileImage },
  { slug: "heic", path: "converters", category: "Converter Tools", icon: FileImage },
  { slug: "jpg", path: "converters", category: "Converter Tools", icon: FileImage },
  { slug: "m4a", path: "converters", category: "Converter Tools", icon: FileAudio },
  { slug: "mkv", path: "converters", category: "Converter Tools", icon: FileVideo },
  { slug: "mobi", path: "converters", category: "Converter Tools", icon: Book },
  { slug: "mov", path: "converters", category: "Converter Tools", icon: FileVideo },
  { slug: "mp4", path: "converters", category: "Converter Tools", icon: FileVideo },
  { slug: "ogg", path: "converters", category: "Converter Tools", icon: FileAudio },
  { slug: "pdf", path: "converters", category: "Converter Tools", icon: FileText },
  { slug: "png", path: "converters", category: "Converter Tools", icon: FileImage },
  { slug: "psd", path: "converters", category: "Converter Tools", icon: FileImage },
  { slug: "svg", path: "converters", category: "Converter Tools", icon: FileCode },
  { slug: "tiff", path: "converters", category: "Converter Tools", icon: FileImage },
  { slug: "url", path: "converters", category: "Converter Tools", icon: Globe },
  { slug: "vsd", path: "converters", category: "Converter Tools", icon: FileText },
  { slug: "vsdx", path: "converters", category: "Converter Tools", icon: FileText },
  { slug: "webm", path: "converters", category: "Converter Tools", icon: FileVideo },
  { slug: "webp", path: "converters", category: "Converter Tools", icon: FileImage },
  { slug: "xls", path: "converters", category: "Converter Tools", icon: FileSpreadsheet },
  { slug: "xml", path: "converters", category: "Converter Tools", icon: FileCode },
  { slug: "detect", path: "web", category: "Web Tools", icon: ShieldCheck },
  { slug: "trace", path: "web", category: "Web Tools", icon: Globe },
];

function getIconForSlug(slug: string): React.ElementType {
  if (slug.includes("merge")) return Merge;
  if (slug.includes("compress")) return Shrink;
  if (slug.includes("word")) return FileText;
  if (slug.includes("jpg") || slug.includes("png") || slug.includes("image") || slug.includes("photo")) return FileImage;
  if (slug.includes("split")) return Scissors;
  if (slug.includes("remove-watermark")) return Eraser;
  if (slug.includes("edit")) return FileEdit;
  if (slug.includes("extract-text")) return FileText;
  if (slug.includes("watermark")) return StampIcon as any;
  if (slug.includes("rearrange")) return List;
  if (slug.includes("sign")) return Signature;
  if (slug.includes("unlock")) return FileKey2;
  if (slug.includes("add-text")) return Type;
  if (slug.includes("rotate")) return RotateCw;
  if (slug.includes("crop")) return Scissors;
  if (slug.includes("annotate")) return PenLine;
  if (slug.includes("protect")) return FileLock2;
  if (slug.includes("summarize") || slug.includes("summarizer")) return BookOpen;
  if (slug.includes("xlsx") || slug.includes("csv") || slug.includes("excel")) return FileSpreadsheet;
  if (slug.includes("epub") || slug.includes("mobi") || slug.includes("azw3")) return Book;
  if (slug.includes("url")) return Globe;
  if (slug.includes("bg") || slug.includes("background")) return Eraser;
  if (slug.includes("resize") || slug.includes("upscale")) return Scaling;
  if (slug.includes("ai")) return Sparkles;
  if (slug.includes("unblur") || slug.includes("sharpen")) return Wand2;
  if (slug.includes("collage")) return Layout;
  if (slug.includes("profile")) return User;
  if (slug.includes("grayscale") || slug.includes("colorize") || slug.includes("pixelate")) return Palette;
  if (slug.includes("flip")) return FlipHorizontal;
  if (slug.includes("translate")) return Languages;
  if (slug.includes("border")) return Layout;
  if (slug.includes("metadata")) return FileSearch;
  if (slug.includes("mp4") || slug.includes("video") || slug.includes("mov") || slug.includes("webm") || slug.includes("mkv") || slug.includes("avi")) return FileVideo;
  if (slug.includes("mp3") || slug.includes("audio") || slug.includes("m4a") || slug.includes("wav") || slug.includes("ogg") || slug.includes("aac")) return FileAudio;
  if (slug.includes("cutter")) return Scissors;
  if (slug.includes("mute")) return VolumeX;
  if (slug.includes("subtitle")) return Subtitles;
  if (slug.includes("podcast")) return Mic;
  if (slug.includes("tiktok")) return Video;
  if (slug.includes("twitter")) return Twitter;
  if (slug.includes("youtube")) return Youtube;
  if (slug.includes("paraphrasing") || slug.includes("rephraser") || slug.includes("rewriter")) return RefreshCw;
  if (slug.includes("writer") || slug.includes("generator") || slug.includes("copy")) return PenLine;
  if (slug.includes("grammar")) return CheckCircle2;
  if (slug.includes("humanizer")) return UserCog;
  if (slug.includes("outline") || slug.includes("planner")) return Map;
  if (slug.includes("caption")) return MessageSquare;
  if (slug.includes("linkedin")) return Linkedin;
  if (slug.includes("detector")) return ShieldCheck;
  if (slug.includes("policy") || slug.includes("agreement")) return FileText;
  if (slug.includes("qr")) return QrCode;
  if (slug.includes("zip")) return Archive;
  if (slug.includes("timestamp")) return Timer;
  if (slug.includes("meme")) return Image;
  return File;
}

function FilePlusIcon(props: any) {
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
    React.createElement('path', { d: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' }),
    React.createElement('polyline', { points: '14 2 14 8 20 8' }),
    React.createElement('line', { x1: '12', y1: '18', x2: '12', y2: '12' }),
    React.createElement('line', { x1: '9', y1: '15', x2: '15', y2: '15' })
  );
}

function StampIcon(props: any) {
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
    React.createElement('path', { d: 'M5 22h14' }),
    React.createElement('path', { d: 'M12 17v-4' }),
    React.createElement('path', { d: 'M12 7c-2.8 0-4 1.2-4 4v2h8v-2c0-2.8-1.2-4-4-4z' }),
    React.createElement('path', { d: 'M12 2a3 3 0 0 0-3 3v2h6V5a3 3 0 0 0-3-3z' })
  );
}

export const tools: Tool[] = rawTools.map((t) => {
  let rank = 999;
  if (t.category === "Pdf Tools") rank = pdfRanking.indexOf(t.slug);
  else if (t.category === "Image Tools") rank = imageRanking.indexOf(t.slug);
  else if (t.category === "Video Tools") rank = videoRanking.indexOf(t.slug);
  else if (t.category === "AI Write") rank = writeRanking.indexOf(t.slug);
  else if (t.category === "Other Tools" || t.category === "Converter Tools" || t.category === "Web Tools") {
    const idx = otherRanking.indexOf(t.slug);
    rank = idx === -1 ? 999 : idx;
  }
  
  if (rank === -1) rank = 999;

  return {
    title: formatTitle(t.slug),
    slug: t.slug,
    description: t.description || `Use this ${t.category.toLowerCase()} tool to ${formatTitle(t.slug).toLowerCase()}. Efficient and powerful AI processing.`,
    href: `https://tinywow.com/${t.path}/${t.slug}`,
    category: t.category,
    icon: t.icon,
    rank: rank,
  };
}).sort((a, b) => a.rank - b.rank);
