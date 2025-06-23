"use client";
import React, { useEffect, useState } from "react";
import SpotlightCard from "./SpotlightCard";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";

const Projects = () => {
  const [data, setData] = useState([]); // 1. Инициализируем как массив
  const [activeProject, setActiveProject] = useState(100);

  async function getData() {
    try {
      // 2. Добавляем обработку ошибок
      const query = `https://rn310c9l.api.sanity.io/v1/data/query/production?query=*%5B_type+%3D%3D+%27projects%27%5D+%7C+order%28_createdAt+desc%29`;
      const response = await fetch(query, { next: { revalidate: 60 } });
      const result = await response.json();
      setData(result.result || []); // 3. На случай если result.result undefined
    } catch (error) {
      console.error("Error fetching data:", error);
      setData([]);
    }
  }

  useEffect(() => {
    getData();
    console.log(data);
  }, []);

  return (
    <div id="projects">
      <div className="flex gap-2 pb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6 !w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
          />
        </svg>

        <p>Мои работы</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5">
        {data.map(
          (
            el,
            index // 4. Убрали лишнюю проверку data &&, так как инициализировали как массив
          ) => (
            <div key={el._id || index}>
              {" "}
              {/* 5. Лучше использовать уникальный id из данных */}
              <SpotlightCard>
                <div className="flex flex-col gap-2">
                  {el.images?.[0] && ( // 6. Проверка на наличие изображения
                    <Image
                      width={1920}
                      height={1080}
                      src={urlForImage(el.images[0]).url()}
                      alt={el.title || "Project image"} // 7. Используем title для alt
                      className="w-full   h-[250px] 2xl:h-[200px] object-cover object-top"
                      priority={index === 0} // 8. Приоритетная загрузка первого изображения
                    />
                  )}
                  <div className="flex justify-between gap-2 pt-2 px-5 ">
                    <a href={el.git} target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-lime-400">{el.title}</a>
                    <p>{el.date}</p>
                  </div>
                  <div className="flex gap-2 justify-between px-5 pb-5 text-sm text-zinc-400">
                    {el.tags && ( // 9. Проверка на наличие тегов
                    <div className="flex flex-wrap gap-2 ">
                      {" "}
                      {/* 10. Добавил отступы */}
                      {el.tags.map(
                        (
                          tag // 11. Исправлено: берем теги из текущего элемента
                        ) => (
                          <p
                            className=""
                            key={tag._key || tag.title}
                          >
                            {tag.title}
                          </p> // 12. Используем _key или title
                        )
                      )}
                    </div>
                  )}
                  <a href={el.git} target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-lime-400">github</a>
                  </div>
                </div>
              </SpotlightCard>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Projects;
