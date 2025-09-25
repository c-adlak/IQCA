import Link from "next/link";
import { courses, getCourseById } from "../../../data/courses";
import ShowInterestForm from "./show-interest-form";

export function generateStaticParams() {
  return courses.map((c) => ({ id: String(c.id) }));
}

export default function ShowInterestByIdPage({ params }: { params: { id: string } }) {
  const course = getCourseById(params.id);

  if (!course) {
    return (
      <div className="min-h-screen mt-32 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Course not found</h1>
          <Link href="/#courses" className="text-primary underline">
            Back to courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-400 to-blue-500">
      <div className="container mx-auto px-4 pt-4">
        <Link
          className="bg-white text-gray-800 px-4 py-2 rounded-md text-sm font-medium"
          href="/#courses"
        >
          Back to IQCA Courses
        </Link>
      </div>

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-2">{course.title}</h1>
        <div className="flex justify-between items-center">
          <p className="text-white">Online Course</p>
        </div>
      </div>

      <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">About this course</h2>
              {course.description && (
                <p className="text-gray-700 mb-4">{course.description}</p>
              )}

              <ShowInterestForm courseTitle={course.title} />
            </div>
            <div className="md:w-1/3">
            <div className="border-b-2 border-blue-500 pt-2 mb-4">
                <h3 className="text-xl font-bold text-gray-800">
                  IQCA Provider
                </h3>
              </div>
              <div className="flex flex-col items-center mb-6">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <div className="text-blue-800 text-xs text-center">
                    <div>CENTRE OF</div>
                    <div className="font-bold">EXCELLENCE</div>
                  </div>
                </div>
                <h4 className="text-lg font-medium text-gray-800">
                  Centre of Excellence
                </h4>
              </div>
              <p className="text-gray-700 text-sm">
                Centre of Excellence is recognised worldwide as one of the
                leading online training providers, with hundreds of learners
                having gained vital skills and qualifications online via our
                centre. Our aim is to help individuals to achieve excellence in
                every area of their life via quality distance learning.
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
  );
}


