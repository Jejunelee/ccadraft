"use client";

import { useMemo, useState } from "react";
import { BookOpen, Calendar, Download, FileText, Search, Video } from "lucide-react";

export type Handout = {
  id: string;
  title: string;
  description: string;
  file_url: string;
  file_size: number;
  file_type: string;
  category: string;
  download_count: number;
  created_at: string;
  thumbnail_url?: string;
};

function formatFileSize(bytes: number) {
  if (!bytes) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
}

function FileIcon({ fileType }: { fileType: string }) {
  if (fileType?.includes("pdf")) return <FileText className="h-5 w-5 text-[#225475]" />;
  if (fileType?.includes("video")) return <Video className="h-5 w-5 text-[#225475]" />;
  return <BookOpen className="h-5 w-5 text-[#225475]" />;
}

export default function Handouts({
  handouts,
  downloadedIds,
}: {
  handouts: Handout[];
  downloadedIds: string[];
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("newest");
  const downloaded = useMemo(() => new Set(downloadedIds), [downloadedIds]);

  const categories = useMemo(
    () => Array.from(new Set(handouts.map((handout) => handout.category).filter(Boolean))).sort(),
    [handouts]
  );

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return handouts
      .filter((handout) => {
        const matchesQuery =
          !needle ||
          handout.title?.toLowerCase().includes(needle) ||
          handout.description?.toLowerCase().includes(needle);
        const matchesCategory = !category || handout.category === category;
        return matchesQuery && matchesCategory;
      })
      .sort((a, b) => {
        if (sort === "popular") return (b.download_count || 0) - (a.download_count || 0);
        if (sort === "oldest") return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
      });
  }, [handouts, query, category, sort]);

  return (
    <>
      <div className="mb-8 rounded-2xl border border-black/10 bg-white p-4">
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[#5c6b73]" />
            <label htmlFor="searchInput" className="sr-only">
              Search handouts
            </label>
            <input
              id="searchInput"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search handouts..."
              className="h-11 w-full rounded-xl border border-black/15 bg-white pr-4 pl-10 text-sm outline-none placeholder:text-black/40 focus:border-[#225475]"
            />
          </div>
          <label className="sr-only" htmlFor="categoryFilter">
            Category
          </label>
          <select
            id="categoryFilter"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="h-11 rounded-xl border border-black/15 bg-white px-4 text-sm outline-none focus:border-[#225475]"
          >
            <option value="">All categories</option>
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <label className="sr-only" htmlFor="sortHandouts">
            Sort handouts
          </label>
          <select
            id="sortHandouts"
            value={sort}
            onChange={(event) => setSort(event.target.value)}
            className="h-11 rounded-xl border border-black/15 bg-white px-4 text-sm outline-none focus:border-[#225475]"
          >
            <option value="newest">Newest first</option>
            <option value="popular">Most downloaded</option>
            <option value="oldest">Oldest first</option>
          </select>
        </div>
      </div>

      {visible.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((handout) => (
            <div key={handout.id} className="overflow-hidden rounded-2xl border border-black/10 bg-white">
              <div className="relative h-32 bg-[#AFCFE4]/30">
                {handout.thumbnail_url ? (
                  <img src={handout.thumbnail_url} alt="" className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-full items-center justify-center text-[#225475]">
                    <FileIcon fileType={handout.file_type} />
                    <span className="ml-2 text-sm">{handout.file_type?.split("/")[1]?.toUpperCase() || "FILE"}</span>
                  </div>
                )}
                {downloaded.has(handout.id) && (
                  <div className="absolute top-3 right-3 rounded-full bg-[#225475] px-2 py-1 text-xs font-medium text-white">
                    Downloaded
                  </div>
                )}
              </div>

              <div className="p-5">
                <h3 className="line-clamp-1 font-poppins text-lg font-semibold">{handout.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[#5c6b73]">{handout.description}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {handout.category ? (
                    <span className="rounded-full bg-[#AFCFE4]/50 px-2.5 py-1 text-xs font-medium text-[#225475]">
                      {handout.category}
                    </span>
                  ) : null}
                  <span className="rounded-full bg-black/5 px-2.5 py-1 text-xs text-[#5c6b73]">
                    {formatFileSize(handout.file_size)}
                  </span>
                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-[#5c6b73]">
                  <div className="flex items-center gap-1">
                    <Download className="h-3 w-3" />
                    <span>{handout.download_count || 0} downloads</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{new Date(handout.created_at).toLocaleDateString()}</span>
                  </div>
                </div>

                <form action="/api/download" method="POST" className="mt-4">
                  <input type="hidden" name="handoutId" value={handout.id} />
                  <button
                    type="submit"
                    className="flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#225475] text-sm font-semibold text-white transition-colors hover:bg-[#1b445e]"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download handout</span>
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-black/10 bg-white p-12 text-center">
          <BookOpen className="mx-auto mb-4 h-12 w-12 text-[#AFCFE4]" />
          <h3 className="font-poppins text-lg font-semibold">
            {handouts.length === 0 ? "No handouts available" : "No handouts match that search"}
          </h3>
          <p className="mt-2 text-[#5c6b73]">
            {handouts.length === 0 ? "Check back later for educational materials." : "Try a different word or category."}
          </p>
        </div>
      )}
    </>
  );
}
