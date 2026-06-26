import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  Card,
  CardDescription,
  CardSection,
  CardSeparator,
  CardTitle,
  Mark,
  Navigation,
  NavigationBrand,
  NavigationItem,
  NavigationLink,
  NavigationList,
} from "@sandwich-ui/react";
import { css } from "@sandwich-ui/styled-system/css";

const meta = {
  parameters: {
    layout: "fullscreen",
  },
  title: "Examples/Landing Page",
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div>
      <Navigation sticky>
        <NavigationList position={"left"}>
          <NavigationBrand asChild>
            <a href={"#"}>Acme Cloud</a>
          </NavigationBrand>
        </NavigationList>
        <NavigationList position={"center"}>
          <NavigationItem>
            <NavigationLink href={"#features"}>Features</NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink href={"#pricing"}>Pricing</NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink href={"#documentation"}>
              Documentation
            </NavigationLink>
          </NavigationItem>
        </NavigationList>
        <NavigationList position={"right"}>
          <NavigationItem>
            <NavigationLink href={"#login"}>Log in</NavigationLink>
          </NavigationItem>
          <NavigationItem
            className={css({
              alignItems: "center",
              display: "flex",
              px: 6,
            })}
          >
            <Button size={"sm"}>Get Started</Button>
          </NavigationItem>
        </NavigationList>
      </Navigation>

      <section
        className={css({
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          gap: "12",
          maxW: "1200px",
          mx: "auto",
          px: "6",
          py: 16,
        })}
      >
        <div
          className={css({
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            gap: "8",
            maxW: "800px",
            textAlign: "center",
            w: "100%",
          })}
        >
          <div
            className={css({ alignItems: "center", display: "flex", gap: "2" })}
          >
            <Badge>NEW REGION</Badge>
            <span className={css({ fontSize: "sm", fontWeight: "600" })}>
              Mumbai region is now available!
            </span>
          </div>

          <h1
            className={css({
              fontSize: "6xl",
              fontWeight: "900",
              lineHeight: "tight",
            })}
          >
            Deploy Your Apps Globally In <Mark>Seconds</Mark>
          </h1>

          <p
            className={css({
              color: "text.muted",
              fontSize: "xl",
              fontWeight: "500",
            })}
          >
            A fast, secure, and reliable developer platform to host servers,
            databases, and microservices with simple tools.
          </p>

          <div className={css({ display: "flex", gap: "4" })}>
            <Button size={"lg"}>Deploy</Button>
            <Button color={"secondary"} size={"lg"} variant={"outlined"}>
              Documentation
            </Button>
          </div>
        </div>

        <div className={css({ maxW: "800px", w: "100%" })}>
          <Card>
            <CardSection>
              <CardTitle>Active Instances</CardTitle>
              <CardDescription>
                Real-time status updates of your active virtual machines on Acme
                Cloud.
              </CardDescription>
            </CardSection>
            <CardSeparator />
            <CardSection
              className={css({
                display: "grid",
                gap: "6",
                gridTemplateColumns: { base: "1fr", md: "1fr 1fr" },
              })}
            >
              <Card>
                <CardSection
                  className={css({
                    display: "flex",
                    flexDirection: "column",
                    gap: "4",
                  })}
                >
                  <div
                    className={css({
                      display: "flex",
                      justifyContent: "space-between",
                    })}
                  >
                    <span
                      className={css({ fontSize: "xs", fontWeight: "800" })}
                    >
                      US-EAST-1
                    </span>
                    <Badge>ONLINE</Badge>
                  </div>
                  <div>
                    <h3 className={css({ fontSize: "lg", fontWeight: "900" })}>
                      acme-web-production
                    </h3>
                    <p
                      className={css({
                        color: "text.muted",
                        fontSize: "xs",
                        mt: "1",
                      })}
                    >
                      CPU Usage: 14% | Memory: 2.1GB / 4GB
                    </p>
                  </div>

                  <div
                    className={css({
                      alignItems: "center",
                      display: "flex",
                      gap: "3",
                    })}
                  >
                    <Avatar size={"sm"}>
                      <AvatarFallback>JD</AvatarFallback>
                      <AvatarImage src={"https://i.pravatar.cc/150?img=33"} />
                    </Avatar>
                    <div>
                      <div
                        className={css({ fontSize: "sm", fontWeight: "700" })}
                      >
                        John Doe
                      </div>
                      <div
                        className={css({ color: "text.muted", fontSize: "xs" })}
                      >
                        Systems Engineer
                      </div>
                    </div>
                  </div>
                </CardSection>
              </Card>

              <Card>
                <CardSection
                  className={css({
                    display: "flex",
                    flexDirection: "column",
                    gap: "4",
                  })}
                >
                  <div
                    className={css({
                      display: "flex",
                      justifyContent: "space-between",
                    })}
                  >
                    <span
                      className={css({ fontSize: "xs", fontWeight: "800" })}
                    >
                      EU-WEST-1
                    </span>
                    <Badge>ONLINE</Badge>
                  </div>
                  <div>
                    <h3 className={css({ fontSize: "lg", fontWeight: "900" })}>
                      acme-db-replica
                    </h3>
                    <p
                      className={css({
                        color: "text.muted",
                        fontSize: "xs",
                        mt: "1",
                      })}
                    >
                      CPU Usage: 8% | Memory: 1.8GB / 4GB
                    </p>
                  </div>

                  <div
                    className={css({
                      alignItems: "center",
                      display: "flex",
                      gap: "3",
                    })}
                  >
                    <Avatar size={"sm"}>
                      <AvatarFallback>AS</AvatarFallback>
                      <AvatarImage src={"https://i.pravatar.cc/150?img=47"} />
                    </Avatar>
                    <div>
                      <div
                        className={css({ fontSize: "sm", fontWeight: "700" })}
                      >
                        Alex Smith
                      </div>
                      <div
                        className={css({ color: "text.muted", fontSize: "xs" })}
                      >
                        Database Administrator
                      </div>
                    </div>
                  </div>
                </CardSection>
              </Card>
            </CardSection>
          </Card>
        </div>
      </section>

      <section
        className={css({
          bg: "surface",
          borderBottomWidth: "2px",
          borderColor: "border",
          borderTopWidth: "2px",
        })}
        id={"features"}
      >
        <div
          className={css({
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            gap: "12",
            maxW: "1200px",
            mx: "auto",
            px: "6",
            py: "16",
          })}
        >
          <div className={css({ textAlign: "center" })}>
            <h2
              className={css({ fontSize: "3xl", fontWeight: "900", mb: "3" })}
            >
              High Performance Cloud Infrastructure
            </h2>
            <p
              className={css({
                color: "text.muted",
              })}
            >
              Acme Cloud provides developer-first hosting services with solid
              uptime guarantees.
            </p>
          </div>

          <div
            className={css({
              display: "grid",
              gap: "6",
              gridTemplateColumns: { base: "1fr", md: "repeat(3, 1fr)" },
            })}
          >
            <Card>
              <CardSection>
                <CardTitle>Global Edge Network</CardTitle>
                <CardDescription>
                  Deploy your virtual servers closer to your clients for minimal
                  network response delay.
                </CardDescription>
              </CardSection>
            </Card>

            <Card>
              <CardSection>
                <CardTitle>Built-in Security</CardTitle>
                <CardDescription>
                  Every server features automated SSL certificates, custom
                  firewalls, and DDoS mitigation.
                </CardDescription>
              </CardSection>
            </Card>

            <Card>
              <CardSection>
                <CardTitle>Developer APIs</CardTitle>
                <CardDescription>
                  Automate resource creation and management tasks using our HTTP
                  REST API.
                </CardDescription>
              </CardSection>
            </Card>
          </div>
        </div>
      </section>

      <footer
        className={css({
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          gap: "6",
          maxW: "1200px",
          mx: "auto",
          px: "6",
          py: "16",
          textAlign: "center",
        })}
      >
        <Card
          className={css({
            w: "full",
          })}
        >
          <CardSection
            className={css({
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              gap: "4",
              py: "10",
              textAlign: "center",
            })}
          >
            <CardTitle>Build your cloud fleet today.</CardTitle>
            <CardDescription>
              Configure, deploy, and scale virtual hardware resources with Acme
              Cloud dashboard.
            </CardDescription>
            <Button size={"lg"}>Get Started Free</Button>
          </CardSection>
        </Card>
        <div className={css({ color: "text.muted", fontSize: "sm" })}>
          © 2026 Acme Cloud. All rights reserved.
        </div>
      </footer>
    </div>
  ),
};
