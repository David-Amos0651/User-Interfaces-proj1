import React, { Component } from "react";

export default class CourseRow extends Component {
  render() {
    const course = this.props.course;

    return (
      
        
        <tr>
          <td className="text-center">{course.id}</td>  
          <td className="text-center">{course.title}</td>
          <td className="text-center">{course.grade}</td>
          <td className="text-center">{course.took}</td>
        </tr>
 
      
    );
  }
}