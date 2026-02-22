import type { foster_history } from "../generated/prisma/client.js";
import prisma from "../lib/prisma.js";
import { RequestUtility } from "../utilities/requestUtility.js";

export const createFosterHistoryRecord = async (req: any, res: any) => {
  try {
    const fosterHistoryRequest: foster_history = req.body;

    if (!RequestUtility.canCreateFosterHistoryRecord(fosterHistoryRequest)) {
      throw new Error("Invalid request");
    }

    //TODO: JJ get user route updated to make sure staff id's is actually a staff user;
    //   if user.getUser(fosterHistoryReq.staffId).role !== UserTypes.Staff {return error}

    const newFosterHistoryRecord = await prisma.foster_history.create({
      data: {
        user_id: fosterHistoryRequest.user_id,
        animal_id: fosterHistoryRequest.animal_id,
        staff_id: fosterHistoryRequest.staff_id,
      },
    });

    res.status(201).json(newFosterHistoryRecord);
  } catch (e: any) {
    console.error(e);
    res.status(400).json({ error: e.message });
  }
};

export const getAllFosterHistoryRecords = async (req: any, res: any) => {
  try {
    const fosterHistoryRecords = await prisma.foster_history.findMany({});

    if (!fosterHistoryRecords) {
      return res.status(404).json({ error: "No foster history found" });
    }

    res.status(200).json(fosterHistoryRecords);
  } catch (e: any) {
    console.error(e);
    res.status(400).json({ error: e.message });
  }
};

export const getFosterHistoryRecordsForUser = async (req: any, res: any) => {
  try {
    const userId = req.params.id as string;

    if (!RequestUtility.canSearchForRecord(userId)) {
      throw new Error("Request Invalid");
    }

    const fosterHistoryRecords = await prisma.foster_history.findMany({
      where: {
        user_id: Number(userId),
      },
    });

    if (!fosterHistoryRecords) {
      return res.status(404).json({ error: "No foster history found" });
    }

    res.status(200).json(fosterHistoryRecords);
  } catch (e: any) {
    console.error(e);
    res.status(400).json({ error: e.message });
  }
};

export const getFosterHistoryRecordsForAnimal = async (req: any, res: any) => {
  try {
    const animalId = req.params.id as string;

    if (!RequestUtility.canSearchForRecord(animalId)) {
      throw new Error("Request Invalid");
    }

    const fosterHistoryRecords = await prisma.foster_history.findMany({
      where: {
        animal_id: Number(animalId),
      },
    });

    if (!fosterHistoryRecords) {
      return res.status(404).json({ error: "No foster history found" });
    }

    res.status(200).json(fosterHistoryRecords);
  } catch (e: any) {
    console.error(e);
    res.status(400).json({ error: e.message });
  }
};

export const updateFosterHistoryRecord = async (req: any, res: any) => {
  try {
    const fosterHistoryId = req.params.id;

    if (!RequestUtility.canSearchForRecord(fosterHistoryId)) {
      console.log(
        fosterHistoryId !== undefined,
        !Number.isNaN(fosterHistoryId)
      );
      throw new Error("Request Invalid");
    }

    const fosterHistoryRecord: foster_history = req.body;

    const updatedFosterHistoryRecord = await prisma.foster_history.update({
      where: {
        foster_history_id: Number(fosterHistoryId),
      },
      data: fosterHistoryRecord,
    });

    res.status(200).json(updatedFosterHistoryRecord);
  } catch (e: any) {
    console.error(e);
    res
      .status(400)
      .json({ error: `${e.message} ${Number.isNaN(req.params.id)}` });
  }
};

export const deleteFosterHistoryRecord = async (req: any, res: any) => {
  try {
    const fosterHistoryId = req.params.id;

    if (!RequestUtility.canSearchForRecord(fosterHistoryId)) {
      throw new Error("Request Invalid");
    }
    await prisma.foster_history.delete({
      where: {
        foster_history_id: Number(fosterHistoryId),
      },
    });

    res.status(200).json({
      wasSuccessful: true,
      message: "Foster history record deleted successfully",
      fosterHistoryId: fosterHistoryId,
    });
  } catch (e: any) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
};
