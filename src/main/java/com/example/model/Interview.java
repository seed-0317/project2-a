package com.example.model;

import java.sql.Timestamp;

/**
 * Created by qzh225 on 5/4/17.
 */
public class Interview {

    private int intId;
    private SeedClass seedClass;
    private User applicant;
    private User interviewer;
    private Timestamp interviewDt;

    public Interview(){}

    public Interview(int intId, SeedClass seedClass, User applicant, User interviewer, Timestamp interviewDt) {
        this.intId = intId;
        this.seedClass = seedClass;
        this.applicant = applicant;
        this.interviewer = interviewer;
        this.interviewDt = interviewDt;
    }

    public int getIntId() {
        return intId;
    }

    public void setIntId(int intId) {
        this.intId = intId;
    }

    public SeedClass getSeedClass() {
        return seedClass;
    }

    public void setSeedClass(SeedClass seedClass) {
        this.seedClass = seedClass;
    }

    public User getApplicant() {
        return applicant;
    }

    public void setApplicant(User applicant) {
        this.applicant = applicant;
    }

    public User getInterviewer() {
        return interviewer;
    }

    public void setInterviewer(User interviewer) {
        this.interviewer = interviewer;
    }

    public Timestamp getInterviewDt() {
        return interviewDt;
    }

    public void setInterviewDt(Timestamp interviewDt) {
        this.interviewDt = interviewDt;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Interview interview = (Interview) o;

        if (intId != interview.intId) return false;
        if (seedClass != null ? !seedClass.equals(interview.seedClass) : interview.seedClass != null) return false;
        if (applicant != null ? !applicant.equals(interview.applicant) : interview.applicant != null) return false;
        if (interviewer != null ? !interviewer.equals(interview.interviewer) : interview.interviewer != null)
            return false;
        return interviewDt != null ? interviewDt.equals(interview.interviewDt) : interview.interviewDt == null;
    }

    @Override
    public int hashCode() {
        int result = intId;
        result = 31 * result + (seedClass != null ? seedClass.hashCode() : 0);
        result = 31 * result + (applicant != null ? applicant.hashCode() : 0);
        result = 31 * result + (interviewer != null ? interviewer.hashCode() : 0);
        result = 31 * result + (interviewDt != null ? interviewDt.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "Interview{" +
                "intId=" + intId +
                ", seedClass=" + seedClass +
                ", applicant=" + applicant +
                ", interviewer=" + interviewer +
                ", interviewDt=" + interviewDt +
                '}';
    }
}