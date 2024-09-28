export type Assignment = {
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
