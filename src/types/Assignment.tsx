export type Assignment = {
  id: number;
  title: string;
  description: string;
  fileUpload: FileType[];
  expiredDate: Date;
};

export type FileType = {
  url: string;
  size: number;
  path: string;
};
