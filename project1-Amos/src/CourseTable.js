import React, { Component } from "react";
import CourseTableRow from "./CourseTableRow";

export default class CourseTable extends Component {

  render() {
  
    const courses = [
      {id : 1, title: 'CSC141', grade: 'A', took: 'Yes'},
      {id : 2, title: 'CSC240', grade: 'A', took: 'Yes'},
      {id : 3, title: 'CSC142', grade: 'B', took: 'Yes'},
      {id : 4, title: 'CSC241', grade: 'A', took: 'No' },
      {id : 5, title: 'ESS101', grade: '',  took: 'No'  },
      {id : 6, title: 'ENG368', grade: 'C', took: 'Yes'},
      {id : 7, title: 'BIO110', grade: '',  took: 'Yes' } 
    ]

   const rows = [];

    courses.forEach((course) => {
      rows.push(
        <CourseTableRow
          course={course}
          key={course.id}
        />
      );
    });

    return (
      <table className="table table-sm table-striped table-bordered">
        <thead className="bg-info text-white text-center m-2 p-2">
          <tr colSpan="3">
            <th>ID</th><th>Title</th><th>Grade</th><th>Took?</th>
          </tr>
        </thead>
        <tbody colSpan="3">
          {rows}
        </tbody>
      </table>  
    );
  }
}