import Card from "@/components/Card";
import EmptyWithIcon from "@/components/EmptyWithIcon";
import TaskGroupLabel from "@/components/TaskGroupLabel";
import { date, diffForHumans } from "@/utils/datetime";
import { redirectTo } from "@/utils/route";
import {
  Box,
  Center,
  Divider,
  Group,
  ScrollArea,
  Stack,
  Text,
  Title,
  Tooltip,
} from "@mantine/core";
import { IconRocket } from "@tabler/icons-react";
import { useTranslation } from "react-i18next"; // Import useTranslation hook
import classes from "./css/OverdueTasks.module.css";

export default function OverdueTasks({ tasks }) {
  const { t } = useTranslation(); 

  return (
    <Card bg="none">
      <Title order={3} ml={15}>
        {t("overdue_tasks")} {/* Translated string */}
      </Title>

      <Divider my={14} />

      {tasks.length > 0 ? (
        <ScrollArea h={300} scrollbarSize={7}>
          <Stack gap={10}>
            {tasks.map((task) => (
              <Box key={task.id} className={classes.task}>
                <Group wrap="nowrap" justify="space-between">
                  <Stack gap={3}>
                    <Text
                      fz={13}
                      fw={600}
                      onClick={() => redirectTo("projects.tasks.open", [task.project_id, task.id])}
                      className={classes.link}
                    >
                      {task.name}
                    </Text>
                    <Group>
                      <Tooltip label={t("task_group_tooltip")} openDelay={500} withArrow>
                        <TaskGroupLabel>{task.task_group.name}</TaskGroupLabel>
                      </Tooltip>
                      <Text fz={11} c="dimmed">
                        {task.project.name}
                      </Text>
                    </Group>
                  </Stack>
                  <Tooltip label={date(task.due_on)} openDelay={500} withArrow>
                    <Text fz={11} c="red" fw={700} className={classes.due}>
                      {diffForHumans(task.due_on)}
                    </Text>
                  </Tooltip>
                </Group>
              </Box>
            ))}
          </Stack>
        </ScrollArea>
      ) : (
        <Center my={30}>
          <EmptyWithIcon title={t("all_done_title")} subtitle={t("no_overdue_tasks")} icon={IconRocket} />
        </Center>
      )}
    </Card>
  );
}
