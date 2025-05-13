// // app/api/courses/route.ts
// // import clientPromise from "@/lib/mongodb";
// import dbConnect from "@/lib/mongodb";
// import { NextRequest, NextResponse } from "next/server";

// // interface Course {
// //   title: string;
// //   duration: string;
// //   rating: number;
// //   reviews: number;
// //   description: string;
// //   topics: string[];
// //   features: string[];
// //   learningOutcomes: string[];
// //   accreditation: {
// //     cityAndGuilds: boolean;
// //     CPD: boolean;
// //     RoSPA: boolean;
// //   };
// // }


// export async function GET() {
//      try {
//     await dbConnect();
//     console.log("✅ Connected to MongoDB");

//     return NextResponse.json({
//       success: true,
//       message: 'MongoDB connection successful',
//     });
//   } catch (error) {
//     console.error("❌ MongoDB connection failed:", error);

//     return new NextResponse(
//       JSON.stringify({
//         success: false,
//         message: 'MongoDB connection failed',
//         error: error.message,
//       }),
//       { status: 500 }
//     );
//   }
// }






import dbConnect from '@/lib/mongodb';
import { NextResponse } from 'next/server';
import Course from '../../models/course';


export const dynamic = 'force-dynamic';

// GET all courses
export async function GET() {
  try {
    await dbConnect();
    const courses = await Course.find({});
    return NextResponse.json({ success: true, data: courses });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

// POST a new course
export async function POST(req) {
  try {
    await dbConnect();
    const body = await req.json();
    const newCourse = await Course.create(body);
    return NextResponse.json({ success: true, data: newCourse }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
