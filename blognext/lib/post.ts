import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'blogposts');

export const getSortedPostData = () => {
  //get the file name
  const filename = fs.readdirSync(postsDirectory);

  const allPostData = filename.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const blogPost: BlogPost = {
      id,
      title: matterResult.data.title.toString(),
      date: matterResult.data.date.toString(),
    };

    // Combine the data with the id
    return blogPost;
  });

  return allPostData.sort((a, b) => (a.date < b.date ? 1 : -1));
};

export const formattedDate = (dateString: string): string => {
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(
    new Date(dateString),
  );
};

export const getSinglePost = async (id: string) => {
  //get the file name
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf-8');

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  const blogPostWithHtml: BlogPost & { contentHtml: string } = {
    id,
    title: matterResult.data.title,
    date: matterResult.data.date,
    contentHtml,
  };

  return blogPostWithHtml;
};
