# Modified task.py
from pydantic import BaseModel
from datetime import date
from enum import Enum
from typing import Optional

class TaskStatus(str, Enum):
    PENDING = "Pending"
    IN_PROGRESS = "In Progress"
    COMPLETED = "Completed"

class TaskCreate(BaseModel):
    title: str
    description: str
    status: TaskStatus = TaskStatus.PENDING
    due_date: date

class TaskUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    status: Optional[TaskStatus] = None
    due_date: Optional[date] = None