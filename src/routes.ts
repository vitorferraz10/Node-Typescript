import { Request, response, Response } from "express";
import CreateCourseService from "./CreateCoursesService";

export function createCourse(req: Request, res: Response) {
  CreateCourseService.execute({
    name: "Node JS",
    educator: "Dani",
    duration: 10,
  });

  CreateCourseService.execute({
    name: "React JS",
    educator: "Diego",
  });

  return console.log(
    res.json({ name: "Course", educator: "Dani", duration: 8 })
  );
}
