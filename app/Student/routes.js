import { Router } from "express";
import mongoose from "mongoose";
import studentController from "./controller.js";

const router = new Router();

// /api/student
// * DON'T REPEAT '/api/students' - it's already in app/index.js
router.get("/", (_, res) => {
  studentController
    .getStudents()
    .then((students) => {
      res.json(students);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

// create route for GET all students and their average score
router.get("/avg", (_, res) => {
  studentController
    .getCumulativeClassAvgScore()
    .then((avg) => {
      res.json({ avg });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

// create a route to delete a student by id
router.delete("/:id", (req, res) => {
  studentController
    .deleteStudentById(req.params.id)
    .then((student) => {
      res.json(student);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

// create a route to get a student by id
router.get("/:id", (req, res) => {
  studentController
    .getStudentById(req.params.id)
    .then((student) => {
      res.json(student);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

// create a route to get a student's average score by id
router.get("/:id/avg", (req, res) => {
  studentController
    .getAvgScoreByStudentId(req.params.id)
    .then((avg) => {
      res.json({ avg });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

// create a route to create a student
router.post("/", (req, res) => {
  studentController
    .createStudent(req.body)
    .then((student) => {
      res.json(student);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

// create a route to create a grade for a student by id
router.post("/:id/grades", (req, res) => {
  studentController
    .createGradeForStudentById(req.params.id, req.body)
    .then((student) => {
      res.json(student);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

// Update the student name
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  // 'value' comes from the raw MongoDB response
  const { value } = await studentController
    .updateStudentNameById(id, name)
    .catch((err) => {
      if (err instanceof mongoose.Error.CastError && err.kind === "ObjectId") {
        res.status(400).json({ message: "Invalid ID" });
      } else if (err instanceof mongoose.Error.ValidationError) {
        res.status(400).json({ message: err.message });
      } else {
        res.status(500).json({ message: err.message });
      }
    });

  if (value) {
    res.json(value);
  } else {
    res.status(404).json({ message: "Student not found" });
  }
});

export default router;
