from sqlalchemy import Column, Integer, String, Date, Enum, ForeignKey
from ..database import Base  # Correct import path
from sqlalchemy.orm import relationship

class Task(Base):
    __tablename__ = "tasks"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(String)
    status = Column(Enum("Pending", "In Progress", "Completed", name="status"))
    due_date = Column(Date)
    user_id = Column(Integer, ForeignKey("users.id"))
    user = relationship("User", back_populates="tasks")