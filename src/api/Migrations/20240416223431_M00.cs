using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace api.Migrations
{
    public partial class M00 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Denúncias",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TipoViolencia = table.Column<int>(type: "int", nullable: false),
                    Descricao = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Denúncias", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Depoimentos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Descricao = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Depoimentos", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Usuários",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nome = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Cidade = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Estado = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Perfil = table.Column<int>(type: "int", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Senha = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Usuários", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "LinkDto",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Href = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Rel = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Metodo = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DenunciaId = table.Column<int>(type: "int", nullable: true),
                    DepoimentoId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LinkDto", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LinkDto_Denúncias_DenunciaId",
                        column: x => x.DenunciaId,
                        principalTable: "Denúncias",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_LinkDto_Depoimentos_DepoimentoId",
                        column: x => x.DepoimentoId,
                        principalTable: "Depoimentos",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "DenunciaUsuarios",
                columns: table => new
                {
                    DenunciaId = table.Column<int>(type: "int", nullable: false),
                    UsuarioId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DenunciaUsuarios", x => new { x.DenunciaId, x.UsuarioId });
                    table.ForeignKey(
                        name: "FK_DenunciaUsuarios_Denúncias_DenunciaId",
                        column: x => x.DenunciaId,
                        principalTable: "Denúncias",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_DenunciaUsuarios_Usuários_UsuarioId",
                        column: x => x.UsuarioId,
                        principalTable: "Usuários",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "DepoimentoUsuarios",
                columns: table => new
                {
                    DepoimentoId = table.Column<int>(type: "int", nullable: false),
                    UsuarioId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DepoimentoUsuarios", x => new { x.DepoimentoId, x.UsuarioId });
                    table.ForeignKey(
                        name: "FK_DepoimentoUsuarios_Depoimentos_DepoimentoId",
                        column: x => x.DepoimentoId,
                        principalTable: "Depoimentos",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_DepoimentoUsuarios_Usuários_UsuarioId",
                        column: x => x.UsuarioId,
                        principalTable: "Usuários",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_DenunciaUsuarios_UsuarioId",
                table: "DenunciaUsuarios",
                column: "UsuarioId");

            migrationBuilder.CreateIndex(
                name: "IX_DepoimentoUsuarios_UsuarioId",
                table: "DepoimentoUsuarios",
                column: "UsuarioId");

            migrationBuilder.CreateIndex(
                name: "IX_LinkDto_DenunciaId",
                table: "LinkDto",
                column: "DenunciaId");

            migrationBuilder.CreateIndex(
                name: "IX_LinkDto_DepoimentoId",
                table: "LinkDto",
                column: "DepoimentoId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DenunciaUsuarios");

            migrationBuilder.DropTable(
                name: "DepoimentoUsuarios");

            migrationBuilder.DropTable(
                name: "LinkDto");

            migrationBuilder.DropTable(
                name: "Usuários");

            migrationBuilder.DropTable(
                name: "Denúncias");

            migrationBuilder.DropTable(
                name: "Depoimentos");
        }
    }
}
